/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
"use strict";
var AppModule;
(function (AppModule) {
    var Routes = (function () {
        function Routes() {
        }
        Routes.configureRoutes = function ($routeProvider) {
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
        };
        Routes.$inject = ["$routeProvider"];
        return Routes;
    })();
    AppModule.Routes = Routes;
})(AppModule || (AppModule = {}));
