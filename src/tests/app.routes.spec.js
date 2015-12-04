describe("Routes", function () {
    beforeEach(angular.mock.module("AppModule"));

    var location, route, rootScope;

    beforeEach(function () {
        inject(function (_$location_, _$route_, _$rootScope_) {
            location = _$location_;
            route = _$route_;
            rootScope = _$rootScope_;
        });
    });

    describe("test home route", function () {
        it("should map to homeController", function () {
            expect(route.routes["/"].controller).toBe("AppModule.Controllers.HomeController");
        });
        it("should map to homeView", function () {
            expect(route.routes["/"].templateUrl).toBe("app/components/home/homeView.html");
        });
    });

    describe("test books route", function () {
        it("should map to bookController", function () {
            expect(route.routes["/books"].controller).toBe("AppModule.Controllers.BookController");
        });
        it("should map to bookView", function () {
            expect(route.routes["/books"].templateUrl).toEqual("app/components/books/bookView.html");
        });
    });

    describe("test contact route", function () {
        it("should map to contactController", function () {
            expect(route.routes["/contact"].controller).toEqual("AppModule.Controllers.ContactController");
        });
        it("should map to contactView", function () {
            expect(route.routes["/contact"].templateUrl).toEqual("app/components/contact/contactView.html");
        });
    });

    describe("default route", function () {
        it("should redirectTo \'/\'", function () {
            expect(route.routes[""].redirectTo).toEqual("/");
        });

    });
});