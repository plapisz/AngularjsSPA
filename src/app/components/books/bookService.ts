/// <reference path="../../../../typings/angularjs/angular.d.ts" />

"use strict";

module AppModule.Services {

    export interface IBookService {
        getBooks(): ng.IPromise<{}>;
        removeBooks(id: number): ng.IPromise<{}>;
        addBook(book: Book): ng.IPromise<{}>;
        updateBook(id: number, book: Book): ng.IPromise<{}>;
    }

    export class BookService implements IBookService {
        static $inject = ["$http"];

        protected url = "http://localhost:55005/api/Book/";
        protected httpService: ng.IHttpService;
        protected promise: ng.IPromise<{}>;


        constructor($http: ng.IHttpService) {
            this.httpService = $http;
        }

        getBooks = (): ng.IPromise<{}> => {
            this.promise = this.httpService.get(this.url)
                .success(response => {
                    return response;
                })
                .error(response => {
                    return response;
                });
            return this.promise;
        }

        removeBooks = (id: number): ng.IPromise<{}> => {
            this.promise = this.httpService.delete(this.url + id)
                .success(response => {
                    return response;
                })
                .error(response => {
                    return response;
                });
            return this.promise;
        }

        addBook(book: Book): ng.IPromise<{}> {
            this.promise = this.httpService.post(this.url, { book: book })
                .success(response => {
                    return response;
                })
                .error(response => {
                    return response;
                });
            return this.promise;
        }

        updateBook(id: number, book: Book): ng.IPromise<{}> {
            this.promise = this.httpService.put(this.url, { id: id, book: book })
                .success(response => {
                    return response;
                })
                .error(response => {
                    return response;
                });
            return this.promise;
        }

    }
    angular.module("AppModule").service("AppModule.Services.BookService", AppModule.Services.BookService);
} 