/// <reference path="../../../../typings/angularjs/angular.d.ts" />

"use strict";

module AppModule.Controllers {
    export class RegisterController {
        static $inject = ["$location", "$timeout", "AppModule.Services.AuthenticationService"];

        protected location: ng.ILocationService
        protected timeout: ng.ITimeoutService;
        protected authenticationService: Services.IAuthenticationService;

        registerUser: RegisterUser;
        showMessage: Boolean;
        message: string;
        savedSuccessfully: Boolean;

        constructor($location: ng.ILocationService, $timeout: ng.ITimeoutService, authenticationService: Services.IAuthenticationService) {
            this.location = $location;
            this.timeout = $timeout;
            this.authenticationService = authenticationService;
            this.savedSuccessfully = false;
            this.showMessage = false;
        }

        register = (): void => {
            this.authenticationService.register(this.registerUser)
                .then(this.getBooksSuccess, this.getBooksError);
        }

        private getBooksSuccess = (response): void => {
            this.savedSuccessfully = true;
            this.showMessage = true;
            this.message = "User has been registered successfully, you will be redicted to login page in 2 seconds.";
            this.startTimer();
        }

        private getBooksError = (response): void => {
            var errors = [];
            for (var key in response.data.ModelState) {
                for (var i = 0; i < response.data.ModelState[key].length; i++) {
                    errors.push(response.data.ModelState[key][i]);
                }
            }
            this.showMessage = true;
            this.message = `Failed to register user due to: ${ errors.join(' ') }`;
        }

        private startTimer = () => {
            var timer = this.timeout(this.redirect, 2000);
        }

        private redirect = () => {
            this.location.path('/login')
        }
    }

    angular.module("AppModule").controller("AppModule.Controllers.RegisterController", RegisterController);
} 