const ytdl = require('ytdl-core');
const stream = require('./stream.controller.mjs');
const { status } = require('express/lib/response');
const {ytmp4} = require('@vreden/youtube_scraper');

async function getStreamURL(req, res) {
    const videoUrl = req.query.url;
    const quality = "720";
    if (!videoUrl) {
        res.status(400).json({
            status: 400,
            message: false,
            error: "url cannot be empty"
        });
    } else {

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