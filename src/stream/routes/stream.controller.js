const fetch = require('node-fetch');

async function getYouTubePlaybackUrls(videoID, quality = '360') {
  const url = `https://youtube-video-fast-downloader-24-7.p.rapidapi.com/download_video/${videoID}?quality=${quality}`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '3bd8deb81fmsh9101e25de8888efp1f5e8ejsnd86b066ee441',
      'x-rapidapi-host': 'youtube-video-fast-downloader-24-7.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    if (json.file) {
      const metadata = {
        type: json.type || "video",
        videoID: videoID,
        title: json.title || 'Untitled',
        quality: json.quality,
        mime: json.mime,
        comment: json.comment,
      };

      const stream = {
        status: true,
        quality: json.quality,
        url: json.file,
        filename: json.title || 'video',
      };

      return { metadata, stream };
    } else {
      throw new Error("No playable URL found in response.");
    }
  } catch (err) {
    throw new Error("Error fetching RapidAPI response: " + err.message);
  }
}

// Express Route Handler
async function getStreamURL(req, res) {
  const videoID = req.query.id;

  if (!videoID) {
    return res.status(400).json({
      status: 400,
      message: false,
      error: "videoID cannot be empty"
    });
  }

  try {
    const results = await getYouTubePlaybackUrls(videoID);
    return res.status(200).json({
      status: 200,
      message: true,
      results
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: false,
      error: error.message
    });
  }
}

module.exports = {
  getStreamURL,
};