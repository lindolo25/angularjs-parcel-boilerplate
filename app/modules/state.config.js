"use strict";

import angular from "angular";
import * as uiRouter from "angular-ui-router";
import contactConfig from "./contact/contact.stateconfig";
import homeConfig from "./home/home.stateconfig";

let modulesConfig = angular.module("app.stateConfig", [uiRouter.default])
    .config(homeConfig)
    .config(contactConfig);

module.exports = modulesConfig;