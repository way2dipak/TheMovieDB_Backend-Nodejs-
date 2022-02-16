const { type } = require('express/lib/response');
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

async function getMovieDetailsByID(apiKey, movieId) {
    try {
        const response = await fetch(`${BASE_URL}movie/${movieId}?api_key=${apiKey}`)
        const data = await response.json();
        if (data.length !== 0) {
            return data;
        } else {
            return {};
        }
    } catch (error) {
        console.log(`errorlogged for getMovieDetailsByID: ${error}`);
        return {}
    }
}

async function getCastAndCrew(apiKey, movieId) {
    try {
        const response = await fetch(`${BASE_URL}movie/${movieId}/credits?api_key=${apiKey}`)
        const data = await response.json();
        if (typeof data['cast'] !== 'undefined') {
            return data['cast'];
        } else {
            return [];
        }
    } catch (error) {
        console.log(`errorlogged for getCastAndCrew: ${error}`);
        return [];
    }
}

async function getMovieTrailers(apiKey, movieId) {
    try {
        const response = await fetch(`${BASE_URL}movie/${movieId}/videos?api_key=${apiKey}`)
        const data = await response.json();
        if (typeof data['results'] !== 'undefined') {
            return data;
        } else {
            return [];
        }
    } catch (error) {
        console.log(`errorlogged for getMovieTrailers: ${error}`);
        return [];
    }
}

async function getRecommendedMovies(apiKey, movieId, pageNo) {
    try {
        const response = await fetch(`${BASE_URL}movie/${movieId}/recommendations?api_key=${apiKey}&page=${pageNo}`)
        const data = await response.json();
        if (typeof data['results'] !== 'undefined') {
            return data;
        } else {
            return [];
        }
    } catch (error) {
        console.log(`errorlogged for getRecommendedMovies: ${error}`);
        return []
    }
}

async function getSimilarMovies(apiKey, movieId, pageNo) {
    try {
        const response = await fetch(`${BASE_URL}movie/${movieId}/similar?api_key=${apiKey}&page=${pageNo}`)
        const data = await response.json();
        if (typeof data['results'] !== 'undefined') {
            return data;
        } else {
            return [];
        }
    } catch (error) {
        console.log(`errorlogged for getSimilarMovies: ${error}`);
        return []
    }
}

async function getMovieReviews(apiKey, movieId, pageNo) {
    try {
        const response = await fetch(`${BASE_URL}movie/${movieId}/reviews?api_key=${apiKey}&page=${pageNo}`)
        const data = await response.json();
        console.log(JSON.stringify(data));
        if (typeof data['results'] !== 'undefined') {
            return data;
        } else {
            return [];
        }
    } catch (error) {
        console.log(`errorlogged for getMovieReviews: ${error}`);
        return []
    }
}

async function getMovieGenre(token) {
    try {
        const response = await fetch(`${BASE_URL}/genre/movie/list?api_key=${token}`);
        const data = await response.json();
        if (typeof data['genres'] !== 'undefined') {
            return {results: data['genres']};
        } else {
            return [];
        }
    } catch (error) {
    console.log(`errorlogged for getMovieGenre: ${error}`);
    return []
    }
}

async function getMoviesByFilter(apiKey, genreId, pageNo) {
    try {
        const response = await fetch(`${BASE_URL}discover/movie?api_key=${apiKey}&with_genres=${genreId}&page=${pageNo}`);
        const data = await response.json();
        if (typeof data['results'] !== 'undefined') {
            return data
        } else {
            return []
        }
    } catch (error) {
        console.log(`errorlogged for getMovieReviews: ${error}`);
        return []
    }
}


module.exports = {
    getTrendingList,
    getUpComingList,
    getPopularList,
    getTopRatedList,
    getActionList,
    getThrillerList,
    getKidsList,
    getHorrorList,
    getMovieDetailsByID,
    getCastAndCrew,
    getMovieTrailers,
    getRecommendedMovies,
    getSimilarMovies,
    getMovieReviews,
    getMovieGenre,
    getMoviesByFilter,

};