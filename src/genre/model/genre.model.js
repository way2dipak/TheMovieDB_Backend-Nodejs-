const router = require('express').Router();

const {
    getMovieGenre,
    getTvGenre,
 } = require('../routes/genre.controller.js');


router.route('/movie').get(getMovieGenre);
router.route('/tv').get(getTvGenre);



module.exports = router;