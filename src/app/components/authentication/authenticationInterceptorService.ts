/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../../typings/angular-local-storage/angular-local-storage.d.ts" />

"use strict";

module AppModule.Services {

    export interface IAuthenticationInterceptor {
        request: Function;
        responseError: Function;
    }

    export class AuthenticationInterceptorService implements IAuthenticationInterceptor {

        static $inject = ["localStorageService", "$q","$location"];

        public static Factory(localStorageService: angular.local.storage.ILocalStorageService, $q: ng.IQService, location: ng.ILocationService) {
            return new AuthenticationInterceptorService(localStorageService, $q, location);
        }

        protected localStorageService: angular.local.storage.ILocalStorageService;
        protected $q: ng.IQService;
        protected location: ng.ILocationService;
       
        constructor(localStorageService: angular.local.storage.ILocalStorageService, $q: ng.IQService, location: ng.ILocationService) {
            this.localStorageService = localStorageService
            this.$q = $q;
            this.location = location;
        }

        request = (config) => {
            config.headers = config.headers || {};
            var authData = this.localStorageService.get('authorizationData');
            if (authData) {
                config.headers.Authorization = 'Bearer ' + authData.token;
            }
            return config;
        }

        responseError = (rejection) => {
            if (rejection.status === 401) {
                this.location.path('/login');
            }
            return this.$q.reject(rejection);
        }

    }
    angular.module("AppModule").service("AppModule.Services.AuthenticationInterceptorService", AppModule.Services.AuthenticationInterceptorService);
} 