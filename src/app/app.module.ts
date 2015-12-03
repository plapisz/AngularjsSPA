/// <reference path="../../typings/angularjs/angular.d.ts" />

"use strict";

((): void=> {
    var app = angular.module("AppModule", ["ngRoute"]);
    app.config(AppModule.Routes.configureRoutes);
})(); 