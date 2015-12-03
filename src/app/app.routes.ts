/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />

"use strict";

module AppModule {
    export class Routes {
        static $inject = ["$routeProvider"];
        static configureRoutes($routeProvider: ng.route.IRouteProvider) {

            $routeProvider
                .when("/", {
                    controller: "AppModule.controllers.homeController",
                    templateUrl: "app/components/home/homeView.html",
                    controllerAs: "bookCtrl"
                })
                .when("/books", {
                    controller: "AppModule.Controllers.BookController",
                    templateUrl: "app/components/books/bookView.html",
                    controllerAs: "bookCtrl"
                })
                .when("/about", {
                    controller: "AppModule.controllers.aboutController",
                    templateUrl: "app/components/about/aboutView.html",
                    controllerAs: "aboutCtrl"
                })
                .otherwise({ redirectTo: "/" });
        }
    }
}