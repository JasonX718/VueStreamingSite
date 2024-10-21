let db =require('../db/index')

exports.getMovies = (req, res) => {
    let sql = `
        SELECT movie.movieid as id, movie.title, movie.movieintro as description, poster.poster_url as posterUrl 
        FROM movie 
        JOIN poster ON movie.movieid = poster.poster_id
    `;
    db.query(sql, (err, data) => {
        if(err) {
            return res.status(500).send('Error: ' + err.message);
        }
        res.send(data);
    })
}

exports.getVideos = (req, res) => {
    let sql = `
        SELECT video.videoid as id, video.title, video.videointro as description, poster.poster_url as posterUrl 
        FROM video 
        JOIN poster ON video.videoid = poster.poster_id
    `;
    db.query(sql, (err, data) => {
        if(err) {
            return res.status(500).send('Error: ' + err.message);
        }
        res.send(data);
    })
}

exports.getstyle = (req, res) => {
    var sql = `
        SELECT movieid AS id, title, movieintro AS description, poster.poster_url AS poster, style AS style, 'Movie' AS type
        FROM movie 
        INNER JOIN poster ON movie.movieid = poster.poster_id 
        INNER JOIN style ON movie.moviestyle_id = style.style_id
        UNION ALL
        SELECT videoid AS id, title, videointro AS description, poster.poster_url AS poster, style AS style, 'Video' AS type
        FROM video
        INNER JOIN poster ON video.videoid = poster.poster_id 
        INNER JOIN style ON video.videostyle_id = style.style_id
    `;
    db.query(sql, (err, data) => {
        if(err) {
            return res.send('Error: ' + err.message);
        }
        res.send(data);
    });
}

