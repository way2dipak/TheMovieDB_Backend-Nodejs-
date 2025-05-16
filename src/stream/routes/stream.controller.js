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

    const formats = output.formats
      .filter(f => f.url)
      .map(f => ({
        itag: f.itag,
        quality: f.qualityLabel || f.format,
        ext: f.ext,
        acodec: f.acodec,
        vcodec: f.vcodec,
        url: f.url,
      }));

    return {
      title: output.title,
      uploader: output.uploader,
      duration: output.duration,
      formats,
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
    const videoDetails = await getYouTubePlaybackUrls(videoUrl);
    return res.status(200).json({
      status: 200,
      message: true,
      results: videoDetails
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
