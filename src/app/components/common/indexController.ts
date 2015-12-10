/// <reference path="../../../../typings/angularjs/angular.d.ts" />

"use strict";

module AppModule.Controllers {
    export class IndexController {
        static $inject = ["AppModule.Services.AuthenticationService", "$location"];

        protected authenticationService: Services.AuthenticationService;
        protected $location: ng.ILocationService;

        authentication: AuthenticationInfo

        constructor(authenticationService: Services.AuthenticationService, $location: ng.ILocationService) {
            this.authenticationService = authenticationService;
            this.$location = $location;
            this.authentication = this.authenticationService.authentication;
        }

        logout = () => {
            this.authenticationService.logout();
            this.$location.path('/');
        }

    }

    angular.module("AppModule").controller("AppModule.Controllers.IndexController", IndexController);
} 