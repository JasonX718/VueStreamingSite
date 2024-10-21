let express = require('express')
let app = express()
let cors = require('cors')
let path = require('path')
let bodyParser = require('body-parser')
let router = require('./router')

app.use('/videos', express.static('D:/MyVideoMedia/'));
app.use(bodyParser.json());  //配置解析，用于解析json和urlencoded格式的数据
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors())              //配置跨域
app.use(router)              //配置路由
app.use((req, res, next) => {
    res.setHeader('Content-Security-Policy', "default-src 'self' http://127.0.0.1; script-src 'self' 'unsafe-eval'");
    next();
});
app.use('/posters', express.static('D:\\MyVideoMedia\\posters\\long_poster'));
app.use('/moviesources', express.static('D:\\MyVideoMedia\\videos\\movies'));
app.use('/videosources', express.static('D:\\MyVideoMedia\\videos\\series'));

app.get('/movieposters/:id', (req, res) => {
    const id = req.params.id;
    const sql = `SELECT movie.movie_id as id, movie.movietitle as title, movie.posterUrl, movie.videoClipURL, style.style as style, "Movie" as type FROM movie INNER JOIN style ON movie.moviestyle_id = style.style_id WHERE movie.movie_id = ${id} UNION SELECT video.video_id as id, video.videotitle as title, video.posterUrl, video.clipUrl, style.style as style, "Video" as type FROM video INNER JOIN style ON video.videostyle_id = style.style_id WHERE video.video_id = ${id}`;
    db.query(sql, (err, data) => {
        if(err) {
            return res.send('Error: ' + err.message)
        }
        res.send(data);
    })
});

const fs = require('fs');

app.get('/pageviews.json', (req, res) => {
  fs.readFile('pageviews.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(data);
    }
  });
});


app.listen(80, () => {
    console.log('服务器启动成功');
})


