const router = require('express').Router();

const {
    getStreamURL,
} = require('../../stream/routes/stream.controller');

router.route('/video').get(getStreamURL);

module.exports = router;