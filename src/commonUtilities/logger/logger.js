const Log = require('./log');

class Logger {
    static log(message, result) {
        console.log(message);
        if (result) {
            const log = new Log('log', message);
            result.logs.push(log);
        }
    }

    static error(message, result) {
        console.error(message);
        if (result) {
            const log = new Log('error', message);
            result.logs.push(log);
        }
    }
}
module.exports = Logger;
