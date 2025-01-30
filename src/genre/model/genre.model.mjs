const router = require('express').Router();

const {
    getMovieGenre,
    getTvGenre,
 } = require('../../genre/routes/genre.controller');


router.route('/movie').get(getMovieGenre);
router.route('/tv').get(getTvGenre);



module.exports = router;