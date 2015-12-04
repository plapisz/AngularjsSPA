/// <reference path="../../../../typings/angularjs/angular.d.ts" />

"use strict";

module AppModule.Services {
    
    export interface IContactService {
        sendMessage(message : Message): ng.IPromise<{}>;
    }

    export class ContactService implements IContactService {
        static $inject = ["$http"];

        protected url = "http://localhost:55005/api/about/";
        protected httpService: ng.IHttpService;
        protected promise: ng.IPromise<{}>;
        
        constructor($http: ng.IHttpService) {
            this.httpService = $http;
        }

        sendMessage(message: Message): ng.IPromise<{}> {
            this.promise = this.httpService.post(this.url, { message : message })
                .success(response => {
                    return response;
                })
                .error(response => {
                    return response;
                });
            return this.promise;
        }

    }
    angular.module("AppModule").service("AppModule.Services.ContactService", AppModule.Services.ContactService);
} 