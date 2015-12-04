describe("ContactController", function () {
    var contactController;
    var contactService;

    beforeEach(angular.mock.module("AppModule"));

    beforeEach(inject(function ($injector, $controller) {
        contactService = $injector.get("AppModule.Services.ContactService");
        contactController = $controller("AppModule.Controllers.ContactController", { contactService: contactService });

        spyOn(contactService, "sendMessage").and.callThrough();
    }));

    describe("defined", function () {
        it("contactController is defined", function () {
            expect(contactController).toBeDefined();
        });
        it("contactService is defined", function () {
            expect(contactService).toBeDefined();
        });
    });

    describe("sendMessage()", function () {
        it("contactService.sendMessage() have been called", function () {
            contactController.message = {
                email: "abc@abc.com",
                message: "Very important message"
            };
            contactController.sendMessage();
            expect(contactService.sendMessage).toHaveBeenCalled();
        });
    });

    describe("clearForm()", function () {
        it("should clear form", function () {
            contactController.message = {
                email : "abc@abc.com",
                message : "Very important message"
            };
            contactController.clearForm();
            expect(contactController.message.email).toEqual('');
            expect(contactController.message.message).toEqual('');
        });
    });

});