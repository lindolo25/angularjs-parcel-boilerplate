"use strict";

import angular from "angular";
import peopleFactory from "./people.service";

let services = angular.module('app.services', [])
    .factory("app.peopleService", peopleFactory);

module.exports = services;