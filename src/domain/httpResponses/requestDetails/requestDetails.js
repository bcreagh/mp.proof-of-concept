const HttpMethods = require('./httpMethods');
const InputTypes = require('./inputTypes');

class RequestDetails {
    constructor() {
        this.httpMethod = HttpMethods.POST;
        this.examples = [];
        this.inputType = InputTypes.JSON;
        this.inputTemplate = '';
    }
}
module.exports = RequestDetails;