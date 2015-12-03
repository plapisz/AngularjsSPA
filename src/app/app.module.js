/// <reference path="../../typings/angularjs/angular.d.ts" />
"use strict";
(function () {
    var app = angular.module("AppModule", ["ngRoute"]);
    app.config(AppModule.Routes.configureRoutes);
})();
