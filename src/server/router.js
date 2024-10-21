let express = require('express')
let router = express.Router()
let user = require('./API/user')
let stream = require('./API/stream')
let list = require('./API/list')
const changeResolution = require('./API/convert');


router.get('/user', user.get)
router.use('/stream', stream);
router.post('/signup', user.signup)
router.post('/login', user.login)
router.get('/movieposters', list.getMovies)
router.get('/videoposters', list.getVideos)
router.get('/style', list.getstyle)
router.post('/convert', (req, res) => {
    const { input, output, resolution } = req.body;
    changeResolution(input, output, resolution)
        .then(() => res.send(`${resolution} conversion done`))
        .catch((err) => res.status(500).send(err.message));
});

module.exports = router
