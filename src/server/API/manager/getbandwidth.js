const si = require('systeminformation');

async function getBandwidthData() {
    const networkStats = await si.networkStats();
    return networkStats;
}
module.exports = { getBandwidthData };
