const schedule = require('node-schedule');
const fs = require('fs');
const readline = require('readline');

const job = schedule.scheduleJob('*/10 * * * *', function() {
    const pageviews = {
        'http://localhost:3000/': 0,
        'http://localhost:3000/tv': 0,
        'http://localhost:3000/latest': 0,
        'http://localhost:3000/category': 0,
        'http://localhost:3000/movies': 0,
    };

    const rl = readline.createInterface({
        input: fs.createReadStream('../../pageviews.log'),
        output: process.stdout,
        terminal: false
    });

    rl.on('line', function(line) {
        const visit = JSON.parse(line);
        if (pageviews[visit.url] !== undefined) {
            pageviews[visit.url]++;
        }
    });

    rl.on('close', function() {
        fs.writeFile('../../pageviews.json', JSON.stringify(pageviews), err => {
            if (err) throw err;
            console.log('Pageviews written to file');
        });
    });
});
