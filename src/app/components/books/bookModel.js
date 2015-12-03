"use strict";
var AppModule;
(function (AppModule) {
    var Author = (function () {
        function Author() {
        }
        return Author;
    })();
    AppModule.Author = Author;
    var Book = (function () {
        function Book() {
        }
        return Book;
    })();
    AppModule.Book = Book;
})(AppModule || (AppModule = {}));
