"use strict";

import bootstrap from "bootstrap/dist/css/bootstrap.css";
import angular from "angular";
import { homeModule, contactModule, peopleModule } from "./modules";
import modulesConfig from "./modules/state.config";
import services from "./services/services.module";

angular.module("app", [
    homeModule.name,
    contactModule.name,
    peopleModule.name,
    modulesConfig.name,
    services.name
])
    .constant("appName", "Angularjs-Parcel-Example")
    .config(['$urlRouterProvider', function ($urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    }]);