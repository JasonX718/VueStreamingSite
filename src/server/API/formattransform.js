const ffmpeg = require('fluent-ffmpeg');

function changeResolution(input, output, resolution) {
    return new Promise((resolve, reject) => {
        ffmpeg(input)
            .outputOptions('-s', resolution) // for example '1280x720'
            .output(output)
            .on('end', () => resolve())
            .on('error', (err) => reject(err))
            .run();
    });
}

const input = './path/to/input.mp4';  // input video file
const output480p = './path/to/output_480p.mp4';  // output video file
const output720p = './path/to/output_720p.mp4';  // output video file
const output1080p = './path/to/output_1080p.mp4';  // output video file

changeResolution(input, output480p, '854x480')
    .then(() => console.log('480p conversion done'))
    .catch((err) => console.error(err));

changeResolution(input, output720p, '1280x720')
    .then(() => console.log('720p conversion done'))
    .catch((err) => console.error(err));

changeResolution(input, output1080p, '1920x1080')
    .then(() => console.log('1080p conversion done'))
    .catch((err) => console.error(err));
