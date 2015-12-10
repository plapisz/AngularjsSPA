/// <reference path="../../typings/angularjs/angular.d.ts" />

"use strict";

((): void=> {
    var app = angular.module("AppModule", ["ngRoute","LocalStorageModule"]);
    app.config(AppModule.Routes.configureRoutes);
    app.config(($httpProvider: ng.IHttpProvider) => {
        $httpProvider.interceptors.push("AppModule.Services.AuthenticationInterceptorService");
    })
})(); 