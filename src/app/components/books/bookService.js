/// <reference path="../../../../typings/angularjs/angular.d.ts" />
"use strict";
var AppModule;
(function (AppModule) {
    var Services;
    (function (Services) {
        var BookService = (function () {
            function BookService($http) {
                var _this = this;
                this.url = "http://localhost:55005/api/Book/";
                this.getBooks = function () {
                    _this.promise = _this.httpService.get(_this.url)
                        .success(function (response) {
                        return response;
                    })
                        .error(function (response) {
                        return response;
                    });
                    return _this.promise;
                };
                this.removeBooks = function (id) {
                    _this.promise = _this.httpService.delete(_this.url + id)
                        .success(function (response) {
                        return response;
                    })
                        .error(function (response) {
                        return response;
                    });
                    return _this.promise;
                };
                this.httpService = $http;
            }
            BookService.prototype.addBook = function (book) {
                this.promise = this.httpService.post(this.url, { book: book })
                    .success(function (response) {
                    return response;
                })
                    .error(function (response) {
                    return response;
                });
                return this.promise;
            };
            BookService.prototype.updateBook = function (id, book) {
                this.promise = this.httpService.put(this.url, { id: id, book: book })
                    .success(function (response) {
                    return response;
                })
                    .error(function (response) {
                    return response;
                });
                return this.promise;
            };
            BookService.$inject = ["$http"];
            return BookService;
        })();
        Services.BookService = BookService;
        angular.module("AppModule").service("AppModule.Services.BookService", AppModule.Services.BookService);
    })(Services = AppModule.Services || (AppModule.Services = {}));
})(AppModule || (AppModule = {}));
