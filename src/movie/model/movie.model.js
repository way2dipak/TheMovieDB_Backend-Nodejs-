
const router = require('express').Router();

const { 
    getHomeFeeds,
    getTrendingList,
    getupcomingList,
    getPopularList,
    getTopRatedList,
    getActionList,
    getThrillerList,
    getKidsList,
    getHorrorList,
    getMovieDetailsByID,
    getRecommendedMovies,
    getSimilarMovies,
    getMovieReviews,
    getMoviesByFilter,
    getBollywoodList,

 } = require('../routes/movie.controller');


router.route('/feed').get(getHomeFeeds);
router.route('/trending/:pageNo').get(getTrendingList);
router.route('/upcoming/:pageNo').get(getupcomingList);
router.route('/bollywood/:pageNo').get(getBollywoodList);
router.route('/popular/:pageNo').get(getPopularList);
router.route('/toprated/:pageNo').get(getTopRatedList);
router.route('/action/:pageNo').get(getActionList);
router.route('/thriller/:pageNo').get(getThrillerList);
router.route('/kids/:pageNo').get(getKidsList);
router.route('/horrors/:pageNo').get(getHorrorList);
router.route('/moviedetailbyid/:movieId').get(getMovieDetailsByID);
router.route('/:movieId/recommendedmovies/:pageNo').get(getRecommendedMovies);
router.route('/:movieId/similarmovies/:pageNo').get(getSimilarMovies);
router.route('/:movieId/reviews/:pageNo').get(getMovieReviews);
router.route('/filter/:genreId/:pageNo').get(getMoviesByFilter);

module.exports = router;



