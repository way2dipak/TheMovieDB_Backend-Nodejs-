
const router = require('express').Router();

const { 
    getHomeFeeds,
    getMovieListBasedOn,
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
    getComedyMovies,
    getDramaMovies,
    getDocumentryMovies,
    getFamilyMovies,
    getCrimeMovies,
    getRomanceMovies,
    getHistoryMovies,
    getFantasyMovies,
    getMysteryMovies,
    getSciFiMovies,
    getBestInTvMovies,
    getWarMovies,
    getWesternMovies,

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

router.route('/comedy/:pageNo').get(getComedyMovies);
router.route('/drama/:pageNo').get(getDramaMovies);
router.route('/documentry/:pageNo').get(getDocumentryMovies);
router.route('/family/:pageNo').get(getFamilyMovies);
router.route('/crime/:pageNo').get(getCrimeMovies);
router.route('/romance/:pageNo').get(getRomanceMovies);
router.route('/history/:pageNo').get(getHistoryMovies);
router.route('/fantasy/:pageNo').get(getFantasyMovies);
router.route('/mystery/:pageNo').get(getMysteryMovies);
router.route('/scifi/:pageNo').get(getSciFiMovies);
router.route('/tvmovie/:pageNo').get(getBestInTvMovies);
router.route('/war/:pageNo').get(getWarMovies);
router.route('/western/:pageNo').get(getWesternMovies);

router.route('/moviedetailbyid/:movieId').get(getMovieDetailsByID);
router.route('/:movieId/recommendedmovies/:pageNo').get(getRecommendedMovies);
router.route('/:movieId/similarmovies/:pageNo').get(getSimilarMovies);
router.route('/:movieId/reviews/:pageNo').get(getMovieReviews);
router.route('/filter/:genreId/:pageNo').get(getMoviesByFilter);
router.route('/:sectionName/:pageNo').get(getMovieListBasedOn);


module.exports = router;



