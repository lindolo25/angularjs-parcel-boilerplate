"use strict";

import peopleTemplate from "./people.view.html";

var peopleComponent = {
    bindings: {
        people: '<'
    },
    template: peopleTemplate,
    controller: peopleController
}

peopleController.$inject = ['$scope', '$log'];

module.exports = peopleComponent;

function peopleController($scope, $log) {

    let ctrl = this;
    ctrl.title = 'People';

    ctrl.$onInit = function () { }

}