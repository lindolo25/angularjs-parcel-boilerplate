"use strict";

import angular from "angular";
import peopleComponent from "./people.component";

debugger;
let peopleModule = angular.module('app.peopleModule', [])
    .component("app.peopleComponent", peopleComponent);

module.exports = peopleModule;