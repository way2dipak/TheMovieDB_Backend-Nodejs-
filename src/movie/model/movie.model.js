
const router = require('express').Router();

const { 
    getHomeFeeds,
    getMovieListBasedOn,
    getMovieDetailsByID,
    getRecommendedMovies,
    getSimilarMovies,
    getMovieReviews,
    getMoviesByFilter,
 } = require('../routes/movie.controller');


router.route('/feed').get(getHomeFeeds);
router.route('/moviedetailbyid/:movieId').get(getMovieDetailsByID);
router.route('/:movieId/recommendedmovies/:pageNo').get(getRecommendedMovies);
router.route('/:movieId/similarmovies/:pageNo').get(getSimilarMovies);
router.route('/:movieId/reviews/:pageNo').get(getMovieReviews);
router.route('/filter/:genreId/:pageNo').get(getMoviesByFilter);
router.route('/:sectionName/:pageNo').get(getMovieListBasedOn);


module.exports = router;



