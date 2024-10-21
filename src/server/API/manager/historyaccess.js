const fs = require('fs');
const readline = require('readline');

function getLoginHistogram() {
    const intervals = ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'];
    const loginCounts = {};


    for (let interval of intervals) {
        loginCounts[interval] = 0;
    }

    const rl = readline.createInterface({
        input: fs.createReadStream('../../loginTableData.log'),
        output: process.stdout,
        terminal: false
    });

    rl.on('line', function(line) {
        const loginTime = new Date(line);
        const hour = loginTime.getHours();
        

        let interval;
        if (hour < 4) interval = '00:00';
        else if (hour < 8) interval = '04:00';
        else if (hour < 12) interval = '08:00';
        else if (hour < 16) interval = '12:00';
        else if (hour < 20) interval = '16:00';
        else interval = '20:00';


        loginCounts[interval]++;
    });

    rl.on('close', function() {

        const formattedData = intervals.map(interval => {
            return { time: interval, visits: loginCounts[interval] };
        });

        fs.writeFile('../../loginTableData.json', JSON.stringify(formattedData), err => {
            if (err) throw err;
            console.log('Login histogram written to file');
        });
    });
}

getLoginHistogram();


