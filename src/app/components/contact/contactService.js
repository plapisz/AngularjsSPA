/// <reference path="../../../../typings/angularjs/angular.d.ts" />
"use strict";
var AppModule;
(function (AppModule) {
    var Services;
    (function (Services) {
        var ContactService = (function () {
            function ContactService($http) {
                this.url = "http://localhost:55005/api/about/";
                this.httpService = $http;
            }
            ContactService.prototype.sendMessage = function (message) {
                this.promise = this.httpService.post(this.url, { message: message })
                    .success(function (response) {
                    return response;
                })
                    .error(function (response) {
                    return response;
                });
                return this.promise;
            };
            ContactService.$inject = ["$http"];
            return ContactService;
        })();
        Services.ContactService = ContactService;
        angular.module("AppModule").service("AppModule.Services.ContactService", AppModule.Services.ContactService);
    })(Services = AppModule.Services || (AppModule.Services = {}));
})(AppModule || (AppModule = {}));
