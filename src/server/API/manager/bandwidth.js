

const schedule = require('node-schedule');
const fs = require('fs');
const { getBandwidthData } = require('./getbandwidth'); 

const job = schedule.scheduleJob('*/10 * * * *', function() {
  const data = getBandwidthData();
  fs.writeFile('../../bandwidth.json', JSON.stringify(data), err => {
    if (err) throw err;
    console.log('Data written to file');
  });
});


