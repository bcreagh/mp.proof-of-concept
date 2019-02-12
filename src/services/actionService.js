const Action = require('../mp/domain/action');
const Example = require('../mp/domain/example');

let appInitialised = false;
let actions = [];
class ActionService {
    static init() {
        if (appInitialised) {
            throw new Error('init() was called more than once. This is not allowed!');
        }
        actions = require('../../actions.json');
        appInitialised = true;
    }
    
    static getAllActions() {
        return actions;
    }

    static getAction(route) {
        const action = actions.find((action) => action.route === route);
        if (!action) {
            throw new Error(`An action could not be found for the route ${route}`);
        }
        // we must return a clone to prevent changes being made to the original
        return ActionService.cloneAction(action);
    }

    static cloneAction(action) {
        const clone = new Action();
        clone.name = action.name;
        clone.description = action.description;
        clone.route = action.route;
        action.examples.forEach(example => {
            const exampleClone = new Example();
            exampleClone.name = example.name;
            exampleClone.hasOwnRoute = example.hasOwnRoute;
            exampleClone.route = example.route;
            exampleClone.input = example.input;
            clone.examples.push(exampleClone);
        });
        clone.requestDetails.httpMethod = action.requestDetails.httpMethod;
        clone.requestDetails.inputType = action.requestDetails.inputType;
        clone.requestDetails.inputTemplate = action.requestDetails.inputTemplate;
        return clone;
    }
}
module.exports = ActionService;