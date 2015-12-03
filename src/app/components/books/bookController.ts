/// <reference path="../../../../typings/angularjs/angular.d.ts" />

"use strict";

module AppModule.Controllers {
    export class BookController {
        static $inject = ["AppModule.Services.BookService"];

        protected bookService: Services.IBookService;

        books: Array<Book>;
        book: Book;
        errorMessage: string;
        showError: Boolean;

        constructor(bookService: Services.IBookService) {
            this.bookService = bookService;
            this.getBooks();
        }

        getBooks = (): void => {
            this.bookService.getBooks()
                .then(this.getBooksSuccess, this.getBooksError);
        }

        removeBooks = (id: number): void => {
            this.bookService.removeBooks(id)
                .then(this.getBooks, this.getBooksError);
        }

        addBooks = (book: Book): void => {
            this.bookService.addBook(book)
                .then(this.getBooks, this.getBooksError);
        }

        updateBook = (id: number, book: Book): void => {
            this.bookService.updateBook(id, book)
                .then(this.getBooks, this.getBooksError);
        }

        getBooksSuccess = (response): void => {
            var jsonResponse = angular.toJson(response.data);
            this.books = JSON.parse(jsonResponse);
        }

        getBooksError = (response): void => {
            this.showError = true;
            this.errorMessage = `Sorry something went wrong. Error status: ${response.status}, error text: ${response.statusText}`;
        }

    }

    angular.module("AppModule").controller("AppModule.Controllers.BookController", BookController);
} 