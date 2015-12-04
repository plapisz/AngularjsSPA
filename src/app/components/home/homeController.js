"use strict";
var AppModule;
(function (AppModule) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController() {
                this.welcomeTitle = "Welcome in sample Angularjs SPA";
            }
            return HomeController;
        })();
        Controllers.HomeController = HomeController;
        angular.module("AppModule").controller("AppModule.Controllers.HomeController", HomeController);
    })(Controllers = AppModule.Controllers || (AppModule.Controllers = {}));
})(AppModule || (AppModule = {}));
