/// <reference path="../../../../typings/angularjs/angular.d.ts" />

"use strict";

module AppModule.Controllers {
    export class ContactController {
        static $inject = ["AppModule.Services.ContactService"];

        protected contactService: Services.IContactService;

        message: Message;
        resultMessage: string;
        showResult: Boolean;

        constructor(contactService: Services.IContactService) {
            this.contactService = contactService;
        }

        clearForm = (): Boolean => {
            this.message.email = "";
            this.message.message = "";
            return false;
        }

        sendMessage = (): void => {
            this.contactService.sendMessage(this.message)
                .then(this.sendMessageSuccess, this.sendMessageError);
        }
        
        protected sendMessageSuccess = (response): void => {
            this.showResult = true;
            this.resultMessage = "message was sent successfully";
            this.clearForm();
        }

        protected sendMessageError = (response): void => {
            this.showResult = true;
            this.resultMessage = `Sorry something went wrong. Error status: ${response.status}, error text: ${response.statusText}`;
        }

    }

    angular.module("AppModule").controller("AppModule.Controllers.ContactController", ContactController);
} 