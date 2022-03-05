const {
    json
} = require('body-parser');
const {
    head
} = require('../model/movie.model');
const datasource = require('./movie.datasource');

//home feed api
async function getHomeFeeds(req, res) {
    console.log(`request HEADER==============================\n\n${req.headers}\n\n======================`);
    const apiKey = req.headers['token'];
    const genreList = await datasource.getMovieGenre(apiKey);
    const newGenreList = getGenresImages(genreList);
    const trendingList = await datasource.getTrendingList(apiKey, 1);
    const popularList = await datasource.getPopularList(apiKey);
    const topRatedList = await datasource.getTopRatedList(apiKey);
    const topActionList = await datasource.getActionList(apiKey);
    const comedyList = await datasource.getMoviesByFilter(apiKey, '35', 1)
    const dramaList = await datasource.getMoviesByFilter(apiKey, '18', 1)
    const documentaryList = await datasource.getMoviesByFilter(apiKey, '99', 1)
    const familyList = await datasource.getMoviesByFilter(apiKey, '10751', 1)
    const crimeList = await datasource.getMoviesByFilter(apiKey, '80', 1)
    const romanceList = await datasource.getMoviesByFilter(apiKey, '10749', 1)
    const historyList = await datasource.getMoviesByFilter(apiKey, '36', 1)
    const topThrillerList = await datasource.getThrillerList(apiKey);
    const bollywoodList = await datasource.getBollywoodList(apiKey);
    const kidsList = await datasource.getKidsList(apiKey);
    const horrorList = await datasource.getHorrorList(apiKey);
    const fantasyList = await datasource.getMoviesByFilter(apiKey, '14', 1)
    const mysteryList = await datasource.getMoviesByFilter(apiKey, '9648', 1)
    const scifiList = await datasource.getMoviesByFilter(apiKey, '878', 1)
    const tvList = await datasource.getMoviesByFilter(apiKey, '10770', 1)
    const warList = await datasource.getMoviesByFilter(apiKey, '10752', 1)
    const westernList = await datasource.getMoviesByFilter(apiKey, '37', 1)
    const homeList = getHomeListModel([
        newGenreList,
        trendingList,
        popularList,
        topRatedList,
        topActionList,
        comedyList,
        dramaList,
        documentaryList,
        familyList,
        crimeList,
        romanceList,
        historyList,
        topThrillerList,
        bollywoodList,
        kidsList,
        horrorList,
        fantasyList,
        mysteryList,
        scifiList,
        tvList,
        warList,
        westernList,

    ])
    if (homeList.length !== 0) {
        return res.status(200).json({
            status: 200,
            success: true,
            results: homeList
        });
    } else {
        return res.status(500).json({
            status: 500,
            success: false,
            error: ECONNRESET
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
            page: Number(pageNo),
            results: moviesList['results'],
            total_pages: moviesList['total_pages'],
            total_results: moviesList['total_results']
        });
    } else {
        return res.status(200).json({
            status: 200,
            success: false,
            error: 'ta da!! no more data...'
        });
    }
}

//top upcoming api
async function getupcomingList(req, res) {
    const token = req.headers['token'];
    const pageNo = req.params.pageNo;
    const moviesList = await datasource.getUpComingList(token, pageNo);

    if (moviesList.length != 0) {
        return res.status(200).json({
            status: 200,
            success: true,
            page: Number(pageNo),
            results: moviesList['results'],
            total_pages: moviesList['total_pages'],
            total_results: moviesList['total_results']
        });
    } else {
        return res.status(200).json({
            status: 200,
            success: false,
            error: 'ta da!! no more data...'
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
            page: Number(pageNo),
            results: moviesList['results'],
            total_pages: moviesList['total_pages'],
            total_results: moviesList['total_results']
        });
    } else {
        return res.status(200).json({
            status: 200,
            success: false,
            error: 'ta da!! no more data...'
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
            page: Number(pageNo),
            results: moviesList['results'],
            total_pages: moviesList['total_pages'],
            total_results: moviesList['total_results']
        });
    } else {
        return res.status(200).json({
            status: 200,
            success: false,
            error: 'ta da!! no more data...'
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
            page: Number(pageNo),
            results: moviesList['results'],
            total_pages: moviesList['total_pages'],
            total_results: moviesList['total_results']
        });
    } else {
        return res.status(200).json({
            status: 200,
            success: false,
            error: 'ta da!! no more data...'
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
            page: Number(pageNo),
            results: moviesList['results'],
            total_pages: moviesList['total_pages'],
            total_results: moviesList['total_results']
        });
    } else {
        return res.status(200).json({
            status: 200,
            success: false,
            error: 'ta da!! no more data...'
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
            page: Number(pageNo),
            results: moviesList['results'],
            total_pages: moviesList['total_pages'],
            total_results: moviesList['total_results']
        });
    } else {
        return res.status(200).json({
            status: 200,
            success: false,
            error: 'ta da!! no more data...'
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
            page: Number(pageNo),
            results: moviesList['results'],
            total_pages: moviesList['total_pages'],
            total_results: moviesList['total_results']
        });
    } else {
        return res.status(200).json({
            status: 200,
            success: false,
            error: 'ta da!! no more data...'
        });
    }
}

//Movie details by movie id api
async function getMovieDetailsByID(req, res) {
    const token = req.headers['token'];
    const movieId = req.params.movieId;

    const pageNo = 1;
    const headerDetails = await datasource.getMovieDetailsByID(token, movieId)
    
    if (headerDetails['status_code'] == 34) {
        return res.status(404).json({
            status: 404,
            success: false,
            error: "https://data.whicdn.com/images/279247154/original.gif"//headerDetails['status_message']
        });
    } else {
        const castList = await datasource.getCastAndCrew(token, movieId);
        const trailersList = await datasource.getMovieTrailers(token, movieId);
        const recommendedList = await datasource.getRecommendedMovies(token, movieId, pageNo);
        const similarList = await datasource.getSimilarMovies(token, movieId, pageNo);
        const headerList = {
            results: [headerDetails]
        };
        const newCast = {
            results: castList
        };

        console.log(`recommendedList: ${recommendedList}`);

        const movieList = getMoviDetailsModel([
            headerList,
            newCast,
            trailersList,
            recommendedList,
            similarList
        ])
        if (movieList.length != 0) {
            return res.status(200).json({
                status: 200,
                success: true,
                results: movieList
            });
        } else {
            return res.status(404).json({
                status: 404,
                success: false,
                error: "invalid movie id..."
            });
        }
    }
}

//Recommended Movies apis
async function getRecommendedMovies(req, res) {
    let token = req.headers['token'];
    let pageNo = req.params.pageNo;
    let movieId = req.params.movieId;
    const movieList = await datasource.getRecommendedMovies(token, movieId, pageNo);
    if (movieList.length != 0) {
        res.status(200).json({
            status: 200,
            success: true,
            page: Number(pageNo),
            results: movieList['results'],
            total_pages: movieList['total_pages'],
            total_results: movieList['total_results']
        });
    } else {
        res.status(404).json({
            status: 404,
            success: false,
            error: 'no record found'
        });
    }
}

//Similar movies api
async function getSimilarMovies(req, res) {
    let token = req.headers['token'];
    let pageNo = req.params.pageNo;
    let movieId = req.params.movieId;

    const movieList = await datasource.getSimilarMovies(token, movieId, pageNo);
    if (movieList.length !== 0) {
        res.status(200).json({
            status: 200,
            success: true,
            page: Number(pageNo),
            results: movieList['results'],
            total_pages: movieList['total_pages'],
            total_results: movieList['total_results']
        })
    } else {
        res.status(404).json({
            status: 404,
            success: false,
            error: 'no record found'
        })
    }
}

//movie reviews api
async function getMovieReviews(req, res) {
    let token = req.headers['token'];
    let pageNo = req.params.pageNo;
    let movieId = req.params.movieId;

    const reviewList = await datasource.getMovieReviews(token, movieId, pageNo);
    if (reviewList.length !== 0) {
        res.status(200).json({
            status: 200,
            success: true,
            page: Number(pageNo),
            results: reviewList['results'],
            total_pages: reviewList['total_pages'],
            total_results: reviewList['total_results']
        })
    } else {
        res.status(404).json({
            status: 404,
            success: false,
            error: 'no review found'
        })
    }
}

//Movie By filter
async function getMoviesByFilter(req, res) {
    let token = req.headers['token'];
    let pageNo = req.params.pageNo;
    let genreId = req.params.genreId;
    const movieList = await datasource.getMoviesByFilter(token, genreId, pageNo)
    if (movieList.length !== 0) {
        res.status(200).json({
            status: 200,
            success: true,
            page: Number(pageNo),
            results: movieList['results'],
            total_pages: movieList['total_pages'],
            total_results: movieList['total_results']
        })
    } else {
        res.status(404).json({
            status: 404,
            success: false,
            error: 'no movie found'
        })
    }
}

//BollywoodMoives
async function getBollywoodList(req, res) {
    let token = req.headers['token'];
    let pageNo = req.params.pageNo;
    let movieId = req.params.movieId;

    const movieList = await datasource.getBollywoodList(token, movieId, pageNo);
    if (movieList.length !== 0) {
        res.status(200).json({
            status: 200,
            success: true,
            page: Number(pageNo),
            results: movieList['results'],
            total_pages: movieList['total_pages'],
            total_results: movieList['total_results']
        })
    } else {
        res.status(404).json({
            status: 404,
            success: false,
            error: 'no record found'
        })
    }
}

//comedy
async function getComedyMovies(req, res) {
    let token = req.headers['token'];
    let pageNo = req.params.pageNo;
    const movieList = await datasource.getMoviesByFilter(token, '35', pageNo)
    if (movieList.length !== 0) {
        res.status(200).json({
            status: 200,
            success: true,
            page: Number(pageNo),
            results: movieList['results'],
            total_pages: movieList['total_pages'],
            total_results: movieList['total_results']
        })
    } else {
        res.status(404).json({
            status: 404,
            success: false,
            error: 'no movie found'
        })
    }
}

//Drama
async function getDramaMovies(req, res) {
    let token = req.headers['token'];
    let pageNo = req.params.pageNo;
    const movieList = await datasource.getMoviesByFilter(token, '18', pageNo)
    if (movieList.length !== 0) {
        res.status(200).json({
            status: 200,
            success: true,
            page: Number(pageNo),
            results: movieList['results'],
            total_pages: movieList['total_pages'],
            total_results: movieList['total_results']
        })
    } else {
        res.status(404).json({
            status: 404,
            success: false,
            error: 'no movie found'
        })
    }
}

//Documentry
async function getDocumentryMovies(req, res) {
    let token = req.headers['token'];
    let pageNo = req.params.pageNo;
    const movieList = await datasource.getMoviesByFilter(token, '99', pageNo)
    if (movieList.length !== 0) {
        res.status(200).json({
            status: 200,
            success: true,
            page: Number(pageNo),
            results: movieList['results'],
            total_pages: movieList['total_pages'],
            total_results: movieList['total_results']
        })
    } else {
        res.status(404).json({
            status: 404,
            success: false,
            error: 'no movie found'
        })
    }
}

//Family Movies
async function getFamilyMovies(req, res) {
    let token = req.headers['token'];
    let pageNo = req.params.pageNo;
    const movieList = await datasource.getMoviesByFilter(token, '10751', pageNo)
    if (movieList.length !== 0) {
        res.status(200).json({
            status: 200,
            success: true,
            page: Number(pageNo),
            results: movieList['results'],
            total_pages: movieList['total_pages'],
            total_results: movieList['total_results']
        })
    } else {
        res.status(404).json({
            status: 404,
            success: false,
            error: 'no movie found'
        })
    }
}

//crime
async function getCrimeMovies(req, res) {
    let token = req.headers['token'];
    let pageNo = req.params.pageNo;
    const movieList = await datasource.getMoviesByFilter(token, '80', pageNo)
    if (movieList.length !== 0) {
        res.status(200).json({
            status: 200,
            success: true,
            page: Number(pageNo),
            results: movieList['results'],
            total_pages: movieList['total_pages'],
            total_results: movieList['total_results']
        })
    } else {
        res.status(404).json({
            status: 404,
            success: false,
            error: 'no movie found'
        })
    }
}

//Romance
async function getRomanceMovies(req, res) {
    let token = req.headers['token'];
    let pageNo = req.params.pageNo;
    const movieList = await datasource.getMoviesByFilter(token, '10749', pageNo)
    if (movieList.length !== 0) {
        res.status(200).json({
            status: 200,
            success: true,
            page: Number(pageNo),
            results: movieList['results'],
            total_pages: movieList['total_pages'],
            total_results: movieList['total_results']
        })
    } else {
        res.status(404).json({
            status: 404,
            success: false,
            error: 'no movie found'
        })
    }
}

//History
async function getHistoryMovies(req, res) {
    let token = req.headers['token'];
    let pageNo = req.params.pageNo;
    const movieList = await datasource.getMoviesByFilter(token, '36', pageNo)
    if (movieList.length !== 0) {
        res.status(200).json({
            status: 200,
            success: true,
            page: Number(pageNo),
            results: movieList['results'],
            total_pages: movieList['total_pages'],
            total_results: movieList['total_results']
        })
    } else {
        res.status(404).json({
            status: 404,
            success: false,
            error: 'no movie found'
        })
    }
}

//Fantasy
async function getFantasyMovies(req, res) {
    let token = req.headers['token'];
    let pageNo = req.params.pageNo;
    const movieList = await datasource.getMoviesByFilter(token, '14', pageNo)
    if (movieList.length !== 0) {
        res.status(200).json({
            status: 200,
            success: true,
            page: Number(pageNo),
            results: movieList['results'],
            total_pages: movieList['total_pages'],
            total_results: movieList['total_results']
        })
    } else {
        res.status(404).json({
            status: 404,
            success: false,
            error: 'no movie found'
        })
    }
}

//Mystery
async function getMysteryMovies(req, res) {
    let token = req.headers['token'];
    let pageNo = req.params.pageNo;
    const movieList = await datasource.getMoviesByFilter(token, '9648', pageNo)
    if (movieList.length !== 0) {
        res.status(200).json({
            status: 200,
            success: true,
            page: Number(pageNo),
            results: movieList['results'],
            total_pages: movieList['total_pages'],
            total_results: movieList['total_results']
        })
    } else {
        res.status(404).json({
            status: 404,
            success: false,
            error: 'no movie found'
        })
    }
}

//SciFi
async function getSciFiMovies(req, res) {
    let token = req.headers['token'];
    let pageNo = req.params.pageNo;
    const movieList = await datasource.getMoviesByFilter(token, '878', pageNo)
    if (movieList.length !== 0) {
        res.status(200).json({
            status: 200,
            success: true,
            page: Number(pageNo),
            results: movieList['results'],
            total_pages: movieList['total_pages'],
            total_results: movieList['total_results']
        })
    } else {
        res.status(404).json({
            status: 404,
            success: false,
            error: 'no movie found'
        })
    }
}

//Best in TV
async function getBestInTvMovies(req, res) {
    let token = req.headers['token'];
    let pageNo = req.params.pageNo;
    const movieList = await datasource.getMoviesByFilter(token, '10770', pageNo)
    if (movieList.length !== 0) {
        res.status(200).json({
            status: 200,
            success: true,
            page: Number(pageNo),
            results: movieList['results'],
            total_pages: movieList['total_pages'],
            total_results: movieList['total_results']
        })
    } else {
        res.status(404).json({
            status: 404,
            success: false,
            error: 'no movie found'
        })
    }
}

//War
async function getWarMovies(req, res) {
    let token = req.headers['token'];
    let pageNo = req.params.pageNo;
    const movieList = await datasource.getMoviesByFilter(token, '10752', pageNo)
    if (movieList.length !== 0) {
        res.status(200).json({
            status: 200,
            success: true,
            page: Number(pageNo),
            results: movieList['results'],
            total_pages: movieList['total_pages'],
            total_results: movieList['total_results']
        })
    } else {
        res.status(404).json({
            status: 404,
            success: false,
            error: 'no movie found'
        })
    }
}

//Western
async function getWesternMovies(req, res) {
    let token = req.headers['token'];
    let pageNo = req.params.pageNo;
    const movieList = await datasource.getMoviesByFilter(token, '37', pageNo)
    if (movieList.length !== 0) {
        res.status(200).json({
            status: 200,
            success: true,
            page: Number(pageNo),
            results: movieList['results'],
            total_pages: movieList['total_pages'],
            total_results: movieList['total_results']
        })
    } else {
        res.status(404).json({
            status: 404,
            success: false,
            error: 'no movie found'
        })
    }
}

function getHomeListModel(itemList) {
    const sectionList = [
        'Explore By Genres',
        'Top Trending',
        `Popular Movies`,
        'Top Rated',
        'Action Movies',
        'Comedy Movies',
        'Drama',
        'Documentary',
        'Family Movies',
        'Crime',
        'Romance Movies',
        'History',
        'Thriller Movies',
        'Movies in Hindi',
        'Best of Kids',
        'Horrors',
        'Fantasy Movies',
        'Mystery',
        'Sci-Fi Movies',
        'Best in TV',
        'War',
        'Western Movies'
    ]
    var data = [];
    for (let i = 0; i < itemList.length; i++) {
        if (itemList[i].length !== 0 && itemList[i]['results'].length !== 0) {
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

function getGenresImages(itemList) {
    const genresImages = [
        'https://images2.minutemediacdn.com/image/upload/c_crop,h_1235,w_2200,x_0,y_6/f_auto,q_auto,w_1100/v1623102468/shape/mentalfloss/646987-jasin_boland_-_c_2012_warner_bros._entertainment_inc.jpg', //action
        'https://i.pinimg.com/originals/79/ce/dd/79ceddc54b1df97ec91a496ba10d5ab0.jpg', //adventure
        'https://static.parade.com/wp-content/uploads/2020/01/Disney-Pixar.jpg', //animation
        'https://i.ytimg.com/vi/fYCixQpLmyA/maxresdefault.jpg', //comedy
        'https://www.deadgoodbooks.co.uk/wp-content/uploads/2018/12/The-very-best-crime-movies-of-2018-Equalizer-2.jpg', //crime
        'https://images.squarespace-cdn.com/content/v1/55afc28de4b0387dc9ed296b/1633688488281-V5FL5WLYZL26WL2CCV2U/The+Rescue+Hero+Still.jpg?format=1000w', //documentary
        'https://static2.srcdn.com/wordpress/wp-content/uploads/2020/04/the-godfather-2.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5', //drama
        'https://www.ecranlarge.com/media/cache/637x252/uploads/articles/000/000/000/4puwt2dniwyi5uctmzfu9neisxu-254-large.jpg', //family
        'https://www.hollywoodreporter.com/wp-content/uploads/2019/03/avatar-publicity_still-h_2019.jpg?w=1024', //fantasy
        'https://cdn.theculturetrip.com/wp-content/uploads/2016/03/435823-ranveer-bajirao-new-650x371.jpg', //history
        'https://s3-us-west-2.amazonaws.com/prd-rteditorial/wp-content/uploads/2020/10/28145542/Scariest_Movies_IT.jpg', //horror
        'https://static.onecms.io/wp-content/uploads/sites/6/2021/02/09/Music_1.jpg', //music
        'https://images.indianexpress.com/2019/03/sherlock-holmes-game-of-shadows-759.jpg', //mystery
        'https://pbblogassets.s3.amazonaws.com/uploads/2020/04/01141054/titanic-cover.jpg', //romance
        'https://1.bp.blogspot.com/-FCW5DsSse38/YGGjJIdtFrI/AAAAAAAAbfI/0OYUSXkgG5Qwjv4M6EjfTfsvvYeHkEj5QCNcBGAsYHQ/s1280/skywalker%2Bsaga%2Bwallpaper.jpg', //science fiction
        'https://www.indiewire.com/wp-content/uploads/2017/10/dark_cave.jpg', //tv movie
        'https://www.deadgoodbooks.co.uk/wp-content/uploads/2014/12/The-very-best-crime-movies-of-2014-nightcrawler.jpg', //thriller
        'https://mwi.usma.edu/wp-content/uploads/2018/09/5619029758_351bdd36aa_o-1200x640.jpg', //war
        'https://sofy.tv/blog/wp-content/uploads/2018/03/1-18.jpg' //western
    ]
    const movieList = itemList['results'];
    var data = [];
    for (let i = 0; i < movieList.length; i++) {
        data.push({
            id: Number(movieList[i]['id']),
            name: movieList[i]['name'],
            backdrop_path: genresImages[i]
        })
    }
    itemList['results'] = data;
    return itemList;
}

function getMoviDetailsModel(itemList) {
    const sectionList = [
        'Header',
        'Cast & Crew',
        'Trailers',
        'Recommended Movies',
        'Similar Movies'

    ]
    var data = [];
    for (let i = 0; i < itemList.length; i++) {
        if (itemList.length !== 0 && itemList[i]['results'].length !== 0) {
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

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {

        // Generate random number
        var j = Math.floor(Math.random() * (i + 1));

        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
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

};