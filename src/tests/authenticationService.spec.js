describe("AuthenticationService", function () {
    var $httpBackend;
    var AuthenticationService;
    var registerUrl = "http://localhost:55005/api/account/register";
    var registerUser = {
        userName: "User", password: "Pa$$word", confirmPassword: "Pa$$word"
    }
    var loginUrl = "http://localhost:55005/token";
    var loginUser = {
        userName: "User", password: "Pa$$word"
    }
    beforeEach(angular.mock.module("AppModule"));

    beforeEach(inject(function ($injector) {
        AuthenticationService = $injector.get("AppModule.Services.AuthenticationService");
        $httpBackend = $injector.get("$httpBackend");
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    describe("defined", function () {
        it("service is defined", function () {
            expect(AuthenticationService).toBeDefined();
        });
        it("httpBackend is defined", function () {
            expect($httpBackend).toBeDefined();
        });
    });

    describe("test register() method", function () {
        it("method return status 200", function () {
            $httpBackend.expectPOST(registerUrl, registerUser).respond({});
            var data;
            AuthenticationService.register(registerUser).then(function (result) {
                data = result;
            });
            $httpBackend.flush();
            expect(data.status).toEqual(200);
        });
    });

    describe("test login() method", function () {
        it("method return status 200", function () {            
            $httpBackend.expectPOST(loginUrl).respond({});
            var data;
            AuthenticationService.login(loginUser).then(function (result) {
                data = result;
            });
            $httpBackend.flush();
            expect(data.status).toEqual(200);
        });
        it("set isAuth to true, loginUser to loginUser and userName to loginUser.userName", function () {
            AuthenticationService.authentication = {
                isAuth: false,
                loginUser: "",
                userName: null,
            }
            $httpBackend.expectPOST(loginUrl).respond({});
            AuthenticationService.login(loginUser).then(function (result) {});
            $httpBackend.flush();
            expect(AuthenticationService.authentication.isAuth).toEqual(true);
            expect(AuthenticationService.authentication.loginUser).toEqual(loginUser);
            expect(AuthenticationService.authentication.userName).toEqual(loginUser.userName);
        });
    });

    describe("test logout() method", function () {
        it("set isAuth to false, loginUser to null and userName to empty string", function () {
            AuthenticationService.authentication = {
                isAuth: true,
                loginUser: loginUser,
                userName: loginUser.userName,
            }
            AuthenticationService.logout();
            expect(AuthenticationService.authentication.isAuth).toEqual(false);
            expect(AuthenticationService.authentication.loginUser).toEqual(null);
            expect(AuthenticationService.authentication.userName).toEqual("");
        });
    });

});
