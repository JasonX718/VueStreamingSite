const ffmpeg = require('fluent-ffmpeg');

function changeResolution(input, output, resolution) {
    return new Promise((resolve, reject) => {
        ffmpeg(input)
            .outputOptions('-s', resolution)
            .output(output)
            .on('end', () => resolve())
            .on('error', (err) => reject(err))
            .run();
    });
}

module.exports = changeResolution;
