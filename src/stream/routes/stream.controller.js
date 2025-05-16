const path = require('path');
const { execFile } = require('child_process');

const ytdlpPath = path.resolve(__dirname, 'bin/yt-dlp');

async function getYouTubePlaybackUrls(videoID) {
  const videoUrl = `https://www.youtube.com/watch?v=${videoID}`;

  return new Promise((resolve, reject) => {
    const args = [
      '--dump-json',
      '--no-warnings',
      '--no-check-certificate',
      '--prefer-free-formats',
      '--youtube-skip-dash-manifest',
      '--no-playlist',
      '--cookies', './cookies.txt',
      videoUrl
    ];

    execFile(ytdlpPath, args, (error, stdout, stderr) => {
      if (error) {
        return reject(new Error(`yt-dlp error: ${stderr || error.message}`));
      }

      try {
        const output = JSON.parse(stdout);

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
          views: output.view_count,
        };

        const stream = {
      status: output.url == "" ? false : true,
      quality: output.height,
      url: output.url || null,
      filename: output.title,
    };

        resolve({ metadata, stream });
      } catch (parseErr) {
        reject(new Error("Failed to parse yt-dlp output: " + parseErr.message));
      }
    });
  });
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

