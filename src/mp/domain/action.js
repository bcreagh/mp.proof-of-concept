const RequestDetails = require('./requestDetails/requestDetails');
const Readme = require('./readme');

function Action() {
    this.name = '';
    this.description = '';
    this.route = '';
    this.readme = new Readme();
    this.examples = [];
    this.requestDetails = new RequestDetails();
}
module.exports = Action;