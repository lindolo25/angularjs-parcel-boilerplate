"use strict";

import angular from "angular";
import { homeModule, contactModule } from "./modules";
import modulesConfig from "./modules/state.config";

angular.module("app", [homeModule.name, contactModule.name, modulesConfig.name])
    .constant("appName", "Angularjs-Parcel-Example")
    .config(['$urlRouterProvider', function ($urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    }]);