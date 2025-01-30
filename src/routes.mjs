
const router = require('express').Router();


router.use('/', (req, res, next) => {
    //console.log("Parameters>>>>" + JSON.stringify(req.headers));
        const apiKey = req.headers['token'];
        if (typeof apiKey !== 'undefined') {
            next();
        } else {
            res.status(401).json({
                status: 401,
                message: 'Authorization failed!! api key is required'
            });
        }
});

router.use('/movie', require('./movie/model/movie.model.mjs'));
router.use('/genre', require('./genre/model/genre.model'));
router.use('/search', require('./search/model/search.model.mjs'));
router.use('/stream', require('./stream/model/stream.model.mjs'));

module.exports = router;