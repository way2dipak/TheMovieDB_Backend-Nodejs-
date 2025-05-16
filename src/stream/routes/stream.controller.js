const youtubedl = require('youtube-dl-exec');

async function getYouTubePlaybackUrls(videoUrl) {
  try {
    const output = await youtubedl(videoUrl, {
      dumpSingleJson: true,
      noWarnings: true,
      noCheckCertificate: true,
      preferFreeFormats: true,
      youtubeSkipDashManifest: true,
    });

    // Choose best quality format (e.g., 720p)
    const bestFormat = output.formats.find(f => f.qualityLabel === '720p' && f.url);

    const metadata = {
      type: "video",
      videoID: output.id,
      url: videoUrl,
      title: output.title,
      description: output.description,
      image: output.thumbnail,
      thumbnail: output.thumbnail,
      seconds: output.duration,
      timestamp: new Date(output.upload_date).toISOString(), // if available
      duration: {
        seconds: output.duration,
        timestamp: new Date(output.duration * 1000).toISOString().substr(11, 8) // HH:mm:ss
      },
      ago: output.upload_date, // could be improved
      views: output.view_count,
      author: {
        name: output.uploader,
        url: output.uploader_url || null
      }
    };

    const stream = {
      status: !!bestFormat,
      quality: bestFormat?.qualityLabel || null,
      availableQuality: [...new Set(output.formats.map(f => f.qualityLabel).filter(Boolean))],
      url: bestFormat?.url || null,
      filename: output._filename || null
    };

    return {
      metadata,
      stream
    };
  } catch (err) {
    throw new Error('Error fetching video info: ' + err.message);
  }
}

async function getStreamURL(req, res) {
  const videoUrl = req.query.url;

  if (!videoUrl) {
    return res.status(400).json({
      status: 400,
      message: false,
      error: "url cannot be empty"
    });
  }

  try {
    const results = await getYouTubePlaybackUrls(videoUrl);
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
