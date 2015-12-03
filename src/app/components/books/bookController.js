/// <reference path="../../../../typings/angularjs/angular.d.ts" />
"use strict";
var AppModule;
(function (AppModule) {
    var Controllers;
    (function (Controllers) {
        var BookController = (function () {
            function BookController(bookService) {
                var _this = this;
                this.getBooks = function () {
                    _this.bookService.getBooks()
                        .then(_this.getBooksSuccess, _this.getBooksError);
                };
                this.removeBooks = function (id) {
                    _this.bookService.removeBooks(id)
                        .then(_this.getBooks, _this.getBooksError);
                };
                this.addBooks = function (book) {
                    _this.bookService.addBook(book)
                        .then(_this.getBooks, _this.getBooksError);
                };
                this.updateBook = function (id, book) {
                    _this.bookService.updateBook(id, book)
                        .then(_this.getBooks, _this.getBooksError);
                };
                this.getBooksSuccess = function (response) {
                    var jsonResponse = angular.toJson(response.data);
                    _this.books = JSON.parse(jsonResponse);
                };
                this.getBooksError = function (response) {
                    _this.showError = true;
                    _this.errorMessage = "Sorry something went wrong. Error status: " + response.status + ", error text: " + response.statusText;
                };
                this.bookService = bookService;
                this.getBooks();
            }
            BookController.$inject = ["AppModule.Services.BookService"];
            return BookController;
        })();
        Controllers.BookController = BookController;
        angular.module("AppModule").controller("AppModule.Controllers.BookController", BookController);
    })(Controllers = AppModule.Controllers || (AppModule.Controllers = {}));
})(AppModule || (AppModule = {}));
