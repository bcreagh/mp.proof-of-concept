let appInitialised = false;
let config = {};
class ConfigService {
    static init() {
        if (appInitialised) {
            throw new Error('init() was called more than once. This is not allowed!');
        }
        config = require('../../config.json');
        appInitialised = true;
    }
    
    static getActions() {
        return config.actions;
    }

    static getPort() {
        return config.port;
    }
}
module.exports = ConfigService;