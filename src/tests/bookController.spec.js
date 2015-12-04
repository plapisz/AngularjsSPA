describe("BookController", function () {
    var bookController;
    var bookService;

    beforeEach(angular.mock.module("AppModule"));

    beforeEach(inject(function ($injector, $controller) {
        bookService = $injector.get("AppModule.Services.BookService");
        bookController = $controller("AppModule.Controllers.BookController", { bookService: bookService });

        spyOn(bookService, "getBooks").and.callThrough();
        spyOn(bookService, "removeBooks").and.callThrough();
        spyOn(bookService, "addBook").and.callThrough();
        spyOn(bookService, "updateBook").and.callThrough();

    }));

    describe("defined", function () {
        it("bookController is defined", function () {
            expect(bookController).toBeDefined();
        });
        it("bookService is defined", function () {
            expect(bookService).toBeDefined();
        });
    });

    describe("getBooks()", function () {
        it("bookService.getBooks() have been called", function () {
            bookController.getBooks();
            expect(bookService.getBooks).toHaveBeenCalled();
        });
    });

    describe("removeBooks()", function () {
        it("bookService.removeBooks() have been called", function () {
            bookController.removeBooks();
            expect(bookService.removeBooks).toHaveBeenCalled();
        });
    });

    describe("addBooks()", function () {
        it("bookService.addBook() have been called", function () {
            bookController.addBooks();
            expect(bookService.addBook).toHaveBeenCalled();
        });
    });

    describe("updateBook()", function () {
        it("bookService.updateBook() have been called", function () {
            bookController.updateBook();
            expect(bookService.updateBook).toHaveBeenCalled();
        });
    });

});