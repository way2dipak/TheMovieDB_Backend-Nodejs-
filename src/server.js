
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8000 ;

app.use(express.json());

app.use('/v1', require('./routes.js'));
app.use(bodyParser.json({limit: '50mb', type: 'application/json'}))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true}));

app.get('/', (req, res) => {
    return res.redirect('https://github.com/way2dipak/TheMovieDB_Backend-Nodejs-');
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
    console.log(req.url);
    var err = new Error('Not Found');
    err.status = 404;
    return res.status(404).json({
        status: 404,
        message: 'Not Found'
    });
});

// catch 500 and forward to error handler
app.use((err, req, res) => {
    res.status(err.status || 500);
    res.json({
      success: false,
      message: { code: 500, text: 'Not Found' }
    });
});

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}...`);
});

module.exports = app;
