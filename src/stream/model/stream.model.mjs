const router = require('express').Router();

const {
    getStreamURL,
} = require('../routes/stream.controller.mjs');

router.route('/video').get(getStreamURL);

module.exports = router;