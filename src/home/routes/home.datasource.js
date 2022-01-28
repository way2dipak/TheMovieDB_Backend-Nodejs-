const fetch = require('node-fetch');
const BASE_URL = 'https://api.themoviedb.org/3/';

async function getTrendingList(apiKey, pageNo) {
    try {
        const response = await fetch(`${BASE_URL}trending/all/day?api_key=${apiKey}&page=${pageNo}`);
        const data = await response.json();
        if (typeof data['results'] !== 'undefined') {
            return data
        } else {
            return []
        }
    } catch (error) {
        console.log(`errorlogged for trending: ${error}`);
        return []
    }
}

async function getUpComingList(apiKey, pageNo) {
    try {
        const response = await fetch(`${BASE_URL}movie/upcoming?api_key=${apiKey}&page=${pageNo}`);
        const data = await response.json();
        if (typeof data['results'] !== 'undefined') {
            return data
        } else {
            console.log('returning emptydata')
            return []
        }
    } catch (error) {
        console.log(`errorlogged for upcoming: ${error}`);
        return []
    }
}

async function getPopularList(apiKey, pageNo) {
    try {
        const response = await fetch(`${BASE_URL}movie/popular?api_key=${apiKey}&page=${pageNo}`);
        const data = await response.json();
        if (typeof data['results'] !== 'undefined') {
            return data
        } else {
            return []
        }
    } catch (error) {
        console.log(`errorlogged for popular: ${error}`);
        return []
    }
}

async function getTopRatedList(apiKey, pageNo) {
    try {
        const response = await fetch(`${BASE_URL}movie/top_rated?api_key=${apiKey}&page=${pageNo}`);
        const data = await response.json();
        if (typeof data['results'] !== 'undefined') {
            return data
        } else {
            return []
        }
    } catch (error) {
        console.log(`errorlogged for topRated: ${error}`);
        return []
    }
}

async function getActionList(apiKey, pageNo) {
    try {
        const response = await fetch(`${BASE_URL}discover/movie?api_key=${apiKey}&with_genres=28&page=${pageNo}`);
        const data = await response.json();
        if (typeof data['results'] !== 'undefined') {
            return data
        } else {
            return []
        }
    } catch (error) {
        console.log(`errorlogged for action: ${error}`);
        return []
    }
}

async function getThrillerList(apiKey, pageNo) {
    try {
        const response = await fetch(`${BASE_URL}discover/movie?api_key=${apiKey}&with_genres=53&page=${pageNo}`);
        const data = await response.json();
        if (typeof data['results'] !== 'undefined') {
            return data
        } else {
            return []
        }
    } catch (error) {
        console.log(`errorlogged for thriller: ${error}`);
        return []
    }
}

async function getKidsList(apiKey, pageNo) {
    try {
        const response = await fetch(`${BASE_URL}discover/movie?api_key=${apiKey}&with_genres=16&page=${pageNo}`);
        const data = await response.json();
        if (typeof data['results'] !== 'undefined') {
            return data
        } else {
            return []
        }
    } catch (error) {
        console.log(`errorlogged for kids: ${error}`);
        return []
    }
}

async function getHorrorList(apiKey, pageNo) {
    try {
        const response = await fetch(`${BASE_URL}discover/movie?api_key=${apiKey}&with_genres=27&page=${pageNo}`);
        const data = await response.json();
        if (typeof data['results'] !== 'undefined') {
            return data
        } else {
            return []
        }
    } catch (error) {
        console.log(`errorlogged for horror: ${error}`);
        return []
    }
}

// async function getNowPlayingList() {
//     const response = await fetch(nowPlayingURL);
//     return await response.json();
// }

module.exports = {
    getTrendingList,
    getUpComingList,
    getPopularList,
    getTopRatedList,
    getActionList,
    getThrillerList,
    getKidsList,
    getHorrorList,
};