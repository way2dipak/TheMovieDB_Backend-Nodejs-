const { type } = require('express/lib/response');
const fetch = require('node-fetch');
const BASE_URL = 'https://api.themoviedb.org/3/';

const sectionType = {
    topTrending: "top trending",
    popularMovie: "Popular Movies",
    topRated: "top rated",
    action: "action movies",
    comedy: "comedy movies",
    drama: "drama",
    documentary: "documentary",
    familyMovie: "family movies",
    crime: "crime",
    romance: "romance movies",
    history: "history",
    thriller: "thriller movies",
    bollywood: "movies in hindi",
    kids: "best of kids",
    horror: "horrors",
    fantasy: "fantasy movies",
    mystery: "mystery",
    scifi: "sci-fi movies",
    bestInTV: "best in tv",
    war: "war",
    westernMovies: "western movies"
};

async function getMovieListBasedOn(section, apikey, pageNo) {
    try {
        const url = "";
        switch (section) {
            case sectionType.topTrending:
                url = `${BASE_URL}trending/all/day?api_key=${apiKey}&page=${pageNo}`;
                break;
            case sectionType.popularMovie:
                url = `${BASE_URL}movie/popular?api_key=${apiKey}&page=${pageNo}`;
                break;
            case sectionType.topRated:
                url = `${BASE_URL}movie/top_rated?api_key=${apiKey}&page=${pageNo}`;
                break;
            case sectionType.action:
                url = `${BASE_URL}discover/movie?api_key=${apiKey}&with_genres=28&page=${pageNo}`;
                break;
            case sectionType.comedy:
                url = `${BASE_URL}discover/movie?api_key=${apiKey}&with_genres=35&page=${pageNo}`;
                break;
            case sectionType.drama:
                url = `${BASE_URL}discover/movie?api_key=${apiKey}&with_genres=18&page=${pageNo}`;
                break;
            case sectionType.documentary:
                url = `${BASE_URL}discover/movie?api_key=${apiKey}&with_genres=99&page=${pageNo}`;
                break;
            case sectionType.familyMovie:
                url = `${BASE_URL}discover/movie?api_key=${apiKey}&with_genres=10751&page=${pageNo}`;
                break;
            case sectionType.crime:
                url = `${BASE_URL}discover/movie?api_key=${apiKey}&with_genres=80&page=${pageNo}`;
                break;
            case sectionType.romance:
                url = `${BASE_URL}discover/movie?api_key=${apiKey}&with_genres=10749&page=${pageNo}`;
                break;
            case sectionType.history:
                url = `${BASE_URL}discover/movie?api_key=${apiKey}&with_genres=36&page=${pageNo}`;
                break;
            case sectionType.thriller:
                url = `${BASE_URL}discover/movie?api_key=${apiKey}&with_genres=53&page=${pageNo}`;
                break;
            case sectionType.bollywood:
                url = `${BASE_URL}discover/movie?api_key=${apikey}&page=${pageNo}&with_original_language=hi`;
                break;
            case sectionType.kids:
                url = `${BASE_URL}discover/movie?api_key=${apiKey}&with_genres=16&page=${pageNo}`;
                break;
            case sectionType.horror:
                url = `${BASE_URL}discover/movie?api_key=${apiKey}&with_genres=27&page=${pageNo}`;
                break;
            case sectionType.fantasy:
                url = `${BASE_URL}discover/movie?api_key=${apiKey}&with_genres=14&page=${pageNo}`;
                break;
            case sectionType.mystery:
                url = `${BASE_URL}discover/movie?api_key=${apiKey}&with_genres=9648&page=${pageNo}`;
                break;
            case sectionType.scifi:
                url = `${BASE_URL}discover/movie?api_key=${apiKey}&with_genres=878&page=${pageNo}`;
                break;
            case sectionType.bestInTV:
                url = `${BASE_URL}discover/movie?api_key=${apiKey}&with_genres=10770&page=${pageNo}`;
                break;
            case sectionType.war:
                url = `${BASE_URL}discover/movie?api_key=${apiKey}&with_genres=10752&page=${pageNo}`;
                break;
            case sectionType.westernMovies:
                url = `${BASE_URL}discover/movie?api_key=${apiKey}&with_genres=37&page=${pageNo}`;
                break;
            default:
                return [];
                break;
        }
        console.log("url:", url);
        const response = await fetch(url);
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
            return [];
        }
    } catch (error) {
        return [];
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
            return { results: data['genres'] };
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
        console.log(`errorlogged for getMoviesByFilter: ${error}`);
        return []
    }
}

async function getBollywoodList(apikey, pageNo) {
    try {
        const response = await fetch(`${BASE_URL}discover/movie?api_key=${apikey}&page=${pageNo}&with_original_language=hi`);
        const data = await response.json();
        if (typeof data['results'] !== 'undefined') {
            return data
        } else {
            console.log('returning emptydata')
            return []
        }
    } catch (error) {
        console.log(`errorlogged for bollywood: ${error}`);
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
    getBollywoodList,
    getMovieListBasedOn,
};