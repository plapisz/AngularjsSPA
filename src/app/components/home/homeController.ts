"use strict";

module AppModule.Controllers {
    export class HomeController {
        welcomeTitle: string;

        constructor() {
            this.welcomeTitle = "Welcome in sample Angularjs SPA";
        }

    }

    angular.module("AppModule").controller("AppModule.Controllers.HomeController", HomeController);
} 