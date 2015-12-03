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
            expect(route.routes["/"].controller).toBe("AppModule.controllers.homeController");
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

    describe("test about route", function () {
        it("should map to aboutController", function () {
            expect(route.routes["/about"].controller).toEqual("AppModule.controllers.aboutController");
        });
        it("should map to aboutView", function () {
            expect(route.routes["/about"].templateUrl).toEqual("app/components/about/aboutView.html");
        });
    });

    describe("default route", function () {
        it("should redirectTo \'/\'", function () {
            expect(route.routes[""].redirectTo).toEqual("/");
        });

    });
});