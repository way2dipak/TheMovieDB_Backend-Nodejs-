const fetch = require('node-fetch');
const genres = require('../../movie/routes/movie.controller.js');


async function getMovieGenre(req, res) {
    const token = req.headers['token'];
    const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${token}`);
    const data = await response.json();
    const genresList = genres.getGenresImages({results: data['genres']});

    if (genresList.length != 0) {
        res.status(200).json({
            status: 200,
            message: true,
            results: genresList['results']
        });
    } else {
        res.status(200).json({
            status: 200,
            message: false
        });
    }
}


async function getTvGenre(req, res) {
    const token = req.headers['token'];
    const response = await fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=${token}`);
    const data = await response.json();

    if (data.length != 0) {
        res.status(200).json({
            status: 200,
            message: true,
            data: data['genres']
        });
    } else {
        res.status(200).json({
            status: 200,
            message: false
        });
    }
}


module.exports = {
    getMovieGenre,
    getTvGenre,
};