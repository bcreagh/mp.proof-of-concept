const RequestDetails = require('./requestDetails/requestDetails');

function GetResponse() {
    this.readme = '';
    this.examples = [];
    this.requestDetails = new RequestDetails();
}
module.exports = GetResponse;