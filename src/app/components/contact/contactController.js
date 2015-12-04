/// <reference path="../../../../typings/angularjs/angular.d.ts" />
"use strict";
var AppModule;
(function (AppModule) {
    var Controllers;
    (function (Controllers) {
        var ContactController = (function () {
            function ContactController(contactService) {
                var _this = this;
                this.clearForm = function () {
                    _this.message.email = "";
                    _this.message.message = "";
                    return false;
                };
                this.sendMessage = function () {
                    _this.contactService.sendMessage(_this.message)
                        .then(_this.sendMessageSuccess, _this.sendMessageError);
                };
                this.sendMessageSuccess = function (response) {
                    _this.showResult = true;
                    _this.resultMessage = "message was sent successfully";
                    _this.clearForm();
                };
                this.sendMessageError = function (response) {
                    _this.showResult = true;
                    _this.resultMessage = "Sorry something went wrong. Error status: " + response.status + ", error text: " + response.statusText;
                };
                this.contactService = contactService;
            }
            ContactController.$inject = ["AppModule.Services.ContactService"];
            return ContactController;
        })();
        Controllers.ContactController = ContactController;
        angular.module("AppModule").controller("AppModule.Controllers.ContactController", ContactController);
    })(Controllers = AppModule.Controllers || (AppModule.Controllers = {}));
})(AppModule || (AppModule = {}));
