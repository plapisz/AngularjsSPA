/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />

"use strict";

module AppModule {
    export class Routes {
        static $inject = ["$routeProvider"];
        static configureRoutes($routeProvider: ng.route.IRouteProvider) {

            $routeProvider
            // route for the home page
                .when("/", {
                    controller: "AppModule.controllers.homeController",
                    templateUrl: "app/components/home/homeView.html",
                    controllerAs: "bookCtrl"
                })
            //  for the customers page
                .when("/books", {
                    controller: "AppModule.Controllers.BookController",
                    templateUrl: "app/components/books/bookView.html",
                    controllerAs: "bookCtrl"
                })
            // route for the contact page
                .when("/about", {
                    controller: "AppModule.controllers.aboutController",
                    templateUrl: "app/components/about/aboutView.html",
                    controllerAs: "aboutCtrl"
                })
            // default redirectTo: "/"
                .otherwise({ redirectTo: "/" });
        }
    }
}