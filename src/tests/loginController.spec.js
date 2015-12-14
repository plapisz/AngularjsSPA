describe("LoginController", function () {
    var loginController;
    var authenticationService;
    var deferred;
    var q;

    beforeEach(angular.mock.module("AppModule"));

    beforeEach(inject(function ($q, $injector, $controller) {
        authenticationService = $injector.get("AppModule.Services.AuthenticationService");
        loginController = $controller("AppModule.Controllers.LoginController", { authenticationService: authenticationService });
        q = $q;
        deferred = $q.defer();
        spyOn(authenticationService, "login").and.returnValue(deferred.promise);
    }));

    describe("defined", function () {
        it("loginController is defined", function () {
            expect(loginController).toBeDefined();
        });
        it("authenticationService is defined", function () {
            expect(authenticationService).toBeDefined();
        });
    });

    describe("login()", function () {
        it("authenticationService.login() have been called", function () {
            loginController.login();
            expect(authenticationService.login).toHaveBeenCalled();
        });
    });


});