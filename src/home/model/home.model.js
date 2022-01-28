
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

 } = require('../routes/home.controller');


router.route('/feed').get(getHomeFeeds);
router.route('/trending/:pageNo').get(getTrendingList);
router.route('/upcoming/:pageNo').get(getupcomingList);
router.route('/popular/:pageNo').get(getPopularList);
router.route('/toprated/:pageNo').get(getTopRatedList);
router.route('/action/:pageNo').get(getActionList);
router.route('/thriller/:pageNo').get(getThrillerList);
router.route('/kids/:pageNo').get(getKidsList);
router.route('/horrors/:pageNo').get(getHorrorList);

module.exports = router;



