const fs = require('fs');

// 创建一个新的日志文件
fs.writeFile('pageviews.log', '', err => {
    if (err) {
        console.error('Error creating log file:', err);
    } else {
        console.log('Created new log file pageviews.log');
    }
});
