const ytdl = require('ytdl-core');
const stream = require('../../stream/routes/stream.controller');
const { status } = require('express/lib/response');
const {ytmp4} = require('@vreden/youtube_scraper');
const { youtubedl } = require('@bochilteam/scraper-youtube');

async function getStreamURL(req, res) {
    const videoId = req.query.id;
    const quality = "360";
    if (!videoId) {
        res.status(400).json({
            status: 400,
            message: false,
            error: "url cannot be empty"
        });
    } else {
        const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
        ytmp4(videoUrl, quality)
        .then(result => {
            if (result.status) {
                const videoDetails = ({
                    metadata: result.metadata,
                    stream: result.download
                })
                res.status(200).json({
                    status: 200,
                    message: true,
                    results: videoDetails
                });
            } else {
                res.status(500).json({
                    status: 500,
                    message: false,
                    error: result.message
            });
        }
     });
    }
}

module.exports = {
    getStreamURL,
}