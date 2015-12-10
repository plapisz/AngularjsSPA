/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../../typings/angular-local-storage/angular-local-storage.d.ts" />

"use strict";

module AppModule.Services {

    export interface IAuthenticationService {
        register(registerUser: RegisterUser): ng.IPromise<{}>;
        login(loginUser: LoginUser): ng.IPromise<{}>;
        logout(): void;
    }

    export class AuthenticationService implements IAuthenticationService {
        static $inject = ["$http", "$q", "localStorageService"];

        protected url = "http://localhost:55005/";
        protected httpService: ng.IHttpService;
        protected $q: ng.IQService;
        protected deferred: ng.IDeferred<{}>;
        protected promise: ng.IPromise<{}>;
        protected localStorageService: angular.local.storage.ILocalStorageService;

        authentication: AuthenticationInfo;

        constructor($http: ng.IHttpService, $q: ng.IQService, localStorageService: angular.local.storage.ILocalStorageService) {
            this.httpService = $http;
            this.$q = $q;
            this.localStorageService = localStorageService;
            this.authentication = {
                isAuth: false,
                loginUser: null,
                userName: "",
            }
        }

        register = (registerUser: RegisterUser): ng.IPromise<{}> => {
            this.promise = this.httpService.post(this.url + "api/account/register", registerUser)
                .success(response => {
                    return response;
                })
                .error(response => {
                    return response;
                });
            return this.promise;
        }

        login = (loginUser: LoginUser): ng.IPromise<{}> => {
            this.authentication.loginUser = loginUser;
            var data = `grant_type=password&username=${loginUser.userName}&password=${loginUser.password}`;
            this.deferred = this.$q.defer();

            this.httpService.post(this.url + 'token', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
                .then(this.loginSuccess, this.loginError);

            return this.deferred.promise;
        }

        logout = (): void => {
            this.localStorageService.remove('authorizationData');
            this.authentication.isAuth = false;
            this.authentication.userName = "";
            this.authentication.loginUser = null;
        }

        private loginSuccess = (response) => {
            this.localStorageService.set('authorizationData', { token: response.data.access_token, userName: this.authentication.loginUser.userName });
            this.authentication.isAuth = true;
            this.authentication.userName = this.authentication.loginUser.userName;

            this.deferred.resolve(response);
        }

        private loginError = (err) => {
            this.logout();
            this.deferred.reject(err);
        }
        
    }
    angular.module("AppModule").service("AppModule.Services.AuthenticationService", AppModule.Services.AuthenticationService);
} 