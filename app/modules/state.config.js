"use strict";

import angular from "angular";
import * as uiRouter from "angular-ui-router";
import contactConfig from "./contact/contact.stateconfig";
import homeConfig from "./home/home.stateconfig";
import peopleConfig from "./people/people.stateconfig";
import personConfig from "./people/person/person.stateconfig";

let modulesConfig = angular.module("app.stateConfig", [uiRouter.default])
    .config(homeConfig)
    .config(contactConfig)
    .config(peopleConfig)
    .config(personConfig);

module.exports = modulesConfig;