const router = require('express').Router();

const {
    searchMovies,
    searchTvShows,
} = require('../routes/search.controller.js');

router.route('/movie/:query/:pageNo').get(searchMovies);
router.route('/tv/:query/:pageNo').get(searchTvShows);


module.exports = router;