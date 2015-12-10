/// <reference path="../../../../typings/angularjs/angular.d.ts" />

"use strict";

module AppModule.Controllers {
    export class LoginController {
        static $inject = ["$location", "AppModule.Services.AuthenticationService"];

        protected authenticationService: Services.IAuthenticationService;
        protected location: ng.ILocationService

        loginUser: LoginUser;
        errorMessage: string;
        showErrorMessage: Boolean;

        constructor(location: ng.ILocationService, authenticationService: Services.IAuthenticationService) {
            this.location = location;
            this.authenticationService = authenticationService;
            this.errorMessage = "";
            this.showErrorMessage = false;
        }

        login = (): void => {
            this.authenticationService.login(this.loginUser)
                .then(this.loginSuccess, this.loginError);
        }

        private loginSuccess = (response) => {
            this.location.path("/");
        }

        private loginError = (response) => {
            this.errorMessage = response.data.error_description;
            this.showErrorMessage = true;
        }

    }

    angular.module("AppModule").controller("AppModule.Controllers.LoginController", LoginController);
} 