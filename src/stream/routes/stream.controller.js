const youtubedl = require('youtube-dl-exec');

async function getYouTubePlaybackUrls(videoID) {
  const videoUrl = `https://www.youtube.com/watch?v=${videoID}`;

  try {
    const output = await youtubedl(videoUrl, {
      dumpSingleJson: true,
      noWarnings: true,
      noCheckCertificate: true,
      preferFreeFormats: true,
      youtubeSkipDashManifest: true,
    });

    const metadata = {
      type: "video",
      videoID: output.id,
      url: videoUrl,
      title: output.title,
      description: output.description,
      image: output.thumbnail,
      thumbnail: output.thumbnail,
      seconds: output.duration,
      timestamp: output.timestamp,
      // duration: {
      //   seconds: output.duration,
      //   timestamp: output.duration
      //     ? new Date(output.duration * 1000).toISOString().substr(11, 8)
      //     : null,
      // },
      // ago: ago,
      views: output.view_count,
    };

    const stream = {
      status: output.url == "" ? false : true,
      quality: output.height,
      url: output.url || null,
      filename: output.title,
    };

    return {
      metadata,
      stream,
    };
  } catch (err) {
    throw new Error('Error fetching video info: ' + err.message);
  }
}

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
