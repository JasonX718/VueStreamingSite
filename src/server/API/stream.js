const express = require('express');
const fs = require('fs');
const { stat } = require('fs').promises;
const router = express.Router();
const path = require('path');

router.get('/:filename', async (req, res) => {
    const filename = req.params.filename;
    const videoPath = path.join('D:/MyVideoMedia/videos/movies', filename);
    
    if (!fs.existsSync(videoPath)) {
        res.status(404).send('File not found');
        return;
    }

    let range = req.headers.range;
    if (!range) {
        res.status(400).send('Requires Range header');
    } else {
        let stats = await stat(videoPath);
        let r = range.match(/bytes=(\d+)-(\d+)?/);
        let start = parseInt(r[1], 10);
        let end = r[2] ? parseInt(r[2], 10) : stats.size - 1;

        if(start >= stats.size) {
            res.status(416).send('Requested Range Not Satisfiable');
            return;
        }

        let head = {
            'Content-Type': 'video/mp4',
            'Content-Range': `bytes ${start}-${end}/${stats.size}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': end - start + 1
        }

        res.writeHead(206, head);
        let streamPosition = {
            start: start,
            end: end
        };

        let stream = fs.createReadStream(videoPath, streamPosition);
        stream.pipe(res);
    }
});

module.exports = router;

