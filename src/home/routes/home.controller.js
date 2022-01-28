
const datasource = require('./home.datasource');

//home feed api
async function getHomeFeeds(req, res) {
    const apiKey = req.headers['token'];
    const trendingList = await datasource.getTrendingList(apiKey, 1);
    const upcomingList = await datasource.getUpComingList(apiKey);
    const popularList = await datasource.getPopularList(apiKey);
    const topRatedList = await datasource.getTopRatedList(apiKey);
    const topActionList = await datasource.getActionList(apiKey);
    const topThrillerList = await datasource.getThrillerList(apiKey);
    const kidsList = await datasource.getKidsList(apiKey);
    const horrorList = await datasource.getHorrorList(apiKey);

    const homeList = getHomeListModel([
        trendingList,
        upcomingList,
        popularList,
        topRatedList,
        topActionList,
        topThrillerList,
        kidsList,
        horrorList
    ])
    if (homeList.length !== 0) {
        return res.status(200).json({
            status: 200,
            success: true,
            data: homeList
        });
    } else {
        return res.status(500).json({
            status: 500,
            success: false,
            message: ECONNRESET
        });
    }
}

//top trending api
async function getTrendingList(req, res) {
    const token = req.headers['token'];
    const pageNo = req.params.pageNo;
    const moviesList = await datasource.getTrendingList(token, pageNo);

    if (moviesList.length != 0) {
        return res.status(200).json({
            status: 200,
            success: true,
            page: pageNo,
            data: moviesList['results'],
            total_pages: moviesList['total_pages'],
            total_results: moviesList['total_results']
        });
    } else {
        return res.status(200).json({
            status: 200,
            success: false,
            message: 'ta da!! no more data...'
        });
    }
}

//top upcoming api
async function getupcomingList(req, res) {
    const token = req.headers['token'];
    const pageNo = req.params.pageNo;
    const moviesList = await datasource.getupcomingList(token, pageNo);

    if (moviesList.length != 0) {
        return res.status(200).json({
            status: 200,
            success: true,
            page: pageNo,
            data: moviesList['results'],
            total_pages: moviesList['total_pages'],
            total_results: moviesList['total_results']
        });
    } else {
        return res.status(200).json({
            status: 200,
            success: false,
            message: 'ta da!! no more data...'
        });
    }
}

//popular api
async function getPopularList(req, res) {
    const token = req.headers['token'];
    const pageNo = req.params.pageNo;
    const moviesList = await datasource.getPopularList(token, pageNo);

    if (moviesList.length != 0) {
        return res.status(200).json({
            status: 200,
            success: true,
            page: pageNo,
            data: moviesList['results'],
            total_pages: moviesList['total_pages'],
            total_results: moviesList['total_results']
        });
    } else {
        return res.status(200).json({
            status: 200,
            success: false,
            message: 'ta da!! no more data...'
        });
    }
}

//top top-rated api
async function getTopRatedList(req, res) {
    const token = req.headers['token'];
    const pageNo = req.params.pageNo;
    const moviesList = await datasource.getTopRatedList(token, pageNo);

    if (moviesList.length != 0) {
        return res.status(200).json({
            status: 200,
            success: true,
            page: pageNo,
            data: moviesList['results'],
            total_pages: moviesList['total_pages'],
            total_results: moviesList['total_results']
        });
    } else {
        return res.status(200).json({
            status: 200,
            success: false,
            message: 'ta da!! no more data...'
        });
    }
}

//top action api
async function getActionList(req, res) {
    const token = req.headers['token'];
    const pageNo = req.params.pageNo;
    const moviesList = await datasource.getActionList(token, pageNo);

    if (moviesList.length != 0) {
        return res.status(200).json({
            status: 200,
            success: true,
            page: pageNo,
            data: moviesList['results'],
            total_pages: moviesList['total_pages'],
            total_results: moviesList['total_results']
        });
    } else {
        return res.status(200).json({
            status: 200,
            success: false,
            message: 'ta da!! no more data...'
        });
    }
}

//top thrillers api
async function getThrillerList(req, res) {
    const token = req.headers['token'];
    const pageNo = req.params.pageNo;
    const moviesList = await datasource.getThrillerList(token, pageNo);

    if (moviesList.length != 0) {
        return res.status(200).json({
            status: 200,
            success: true,
            page: pageNo,
            data: moviesList['results'],
            total_pages: moviesList['total_pages'],
            total_results: moviesList['total_results']
        });
    } else {
        return res.status(200).json({
            status: 200,
            success: false,
            message: 'ta da!! no more data...'
        });
    }
}

//kids api
async function getKidsList(req, res) {
    const token = req.headers['token'];
    const pageNo = req.params.pageNo;
    const moviesList = await datasource.getKidsList(token, pageNo);

    if (moviesList.length != 0) {
        return res.status(200).json({
            status: 200,
            success: true,
            page: pageNo,
            data: moviesList['results'],
            total_pages: moviesList['total_pages'],
            total_results: moviesList['total_results']
        });
    } else {
        return res.status(200).json({
            status: 200,
            success: false,
            message: 'ta da!! no more data...'
        });
    }
}

//horrors api
async function getHorrorList(req, res) {
    const token = req.headers['token'];
    const pageNo = req.params.pageNo;
    const moviesList = await datasource.getHorrorList(token, pageNo);

    if (moviesList.length != 0) {
        return res.status(200).json({
            status: 200,
            success: true,
            page: pageNo,
            data: moviesList['results'],
            total_pages: moviesList['total_pages'],
            total_results: moviesList['total_results']
        });
    } else {
        return res.status(200).json({
            status: 200,
            success: false,
            message: 'ta da!! no more data...'
        });
    }
}

function getHomeListModel(itemList) {
    const sectionList = [
        'Top Trending',
        'Upcoming',
        `What's Popular`,
        'Top Rated',
        'Top Action',
        'Top Thriller',
        'Best of Kids',
        'Best of Horrors',
    ]
    var data = [];
    for (let i = 0; i < itemList.length; i++) {
        if (itemList[i].length !== 0) {
            const movieList = itemList[i]['results'];
            data.push({
                index: i,
                sectionTitle: sectionList[i],
                sectionData: movieList
            })
        }
    }
    return data;
}


module.exports = {
    getHomeFeeds,
    getTrendingList,
    getupcomingList,
    getPopularList,
    getTopRatedList,
    getActionList,
    getThrillerList,
    getKidsList,
    getHorrorList,
};