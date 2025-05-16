const fetch = require('node-fetch');

async function searchMovies(req, res) {
    const token = req.headers['token'];
    const pageNo = req.params.pageNo;
    const query = req.params.query;
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${token}&page=${pageNo}&include_adult=true&query=${query}`);
    const data = await response.json();

    if (data.length !== 0) {
        return res.status(200).json({
            status: 200,
            success: true,
            message: data['status_message'],
            page: Number(pageNo),
            results: data['results'],
            total_pages: data['total_pages'],
            total_results: data['total_results']
        });
    } else {
        return res.status(404).json({
            status: 404,
            success: false,
            error: 'No result found...'
        });
    }
}

async function searchTvShows(req, res) {
    const token = req.headers['token'];
    const pageNo = req.params.pageNo;
    const query = req.params.query;
    const response = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=${token}&page=${pageNo}&include_adult=true&query=${query}`);
    const data = await response.json();

    if (data.length !== 0) {
        return res.status(200).json({
            status: 200,
            success: true,
            message: data['status_message'],
            page: Number(pageNo),
            results: data['results'],
            total_pages: data['total_pages'],
            total_results: data['total_results']
        });
    } else {
        return res.status(404).json({
            status: 404,
            success: false,
            error: 'No result found...'
        });
    }
}

module.exports = {
    searchMovies,
    searchTvShows,
};