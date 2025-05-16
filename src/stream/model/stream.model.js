const router = require('express').Router();

const {
    getStreamURL,
} = require('../routes/stream.controller.js');

router.route('/video').get(getStreamURL);

module.exports = router;