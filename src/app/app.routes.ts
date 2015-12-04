/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />

"use strict";

module AppModule {
    export class Routes {
        static $inject = ["$routeProvider"];
        static configureRoutes($routeProvider: ng.route.IRouteProvider) {

            $routeProvider
                .when("/", {
                    controller: "AppModule.Controllers.HomeController",
                    templateUrl: "app/components/home/homeView.html",
                    controllerAs: "bookCtrl"
                })
                .when("/books", {
                    controller: "AppModule.Controllers.BookController",
                    templateUrl: "app/components/books/bookView.html",
                    controllerAs: "bookCtrl"
                })
                .when("/contact", {
                    controller: "AppModule.Controllers.ContactController",
                    templateUrl: "app/components/contact/contactView.html",
                    controllerAs: "contactCtrl"
                })
                .otherwise({ redirectTo: "/" });
        }
    }
}