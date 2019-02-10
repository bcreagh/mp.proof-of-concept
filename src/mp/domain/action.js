const RequestDetails = require('./requestDetails/requestDetails');

function Action() {
    this.readme = '';
    this.examples = [];
    this.requestDetails = new RequestDetails();
}
module.exports = Action;