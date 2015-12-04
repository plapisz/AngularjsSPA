describe("ContactService", function () {
    var $httpBackend;
    var contactService;
    var url = "http://localhost:55005/api/about/";

    beforeEach(angular.mock.module("AppModule"));

    beforeEach(inject(function ($injector) {
        contactService = $injector.get("AppModule.Services.ContactService");
        $httpBackend = $injector.get("$httpBackend");
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    describe("defined", function () {
        it("service is defined", function () {
            expect(contactService).toBeDefined();
        });
        it("httpBackend is defined", function () {
            expect($httpBackend).toBeDefined();
        });
    });

    describe("test sendMessage() method", function () {
        it("return status 200 if success", function () {
            var message = {  email: "abc@abc.com" ,  message: "Very important message!" };
            $httpBackend.expectPOST(url, { "message": message }).respond({});
            var status;
            contactService.sendMessage(message).then(function (result) {
                status = result;
            });
            $httpBackend.flush();
            expect(status.status).toEqual(200);
        });

    });

});