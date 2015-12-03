describe("BookService", function () {
    var $httpBackend;
    var bookService;
    var books = [
        { "id": "1", "title": "The Godfather", "year": "1969", "authorId": "1", "author": { "id": "1", "firstName": "Mario", "lastName": "Puzzo" } },
        { "id": "2", "title": "The Master and Margarita", "year": "1967", "authorId": "2", "author": { "id": "2", "firstName": "Mikhail", "lastName": "Bulgakov" } },
        { "id": "3", "title": "Nineteen Eighty-Four", "year": "1949", "authorId": "3", "author": { "id": "3", "firstName": "George", "lastName": "Orwell" } }];
    var url = "http://localhost:55005/api/Book/";

    beforeEach(angular.mock.module("AppModule"));

    beforeEach(inject(function ($injector) {
        bookService = $injector.get("AppModule.Services.BookService");
        $httpBackend = $injector.get("$httpBackend");
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    describe("defined", function () {
        it("service is defined", function () {
            expect(bookService).toBeDefined();
        });
        it("httpBackend is defined", function () {
            expect($httpBackend).toBeDefined();
        });
    });

    describe("test getBooks() method", function () {
        it("method return correct value and status 200", function () {
            $httpBackend.expectGET(url).respond(books);
            var data;
            bookService.getBooks().then(function (result) {
                data = result;
            });
            $httpBackend.flush();
            expect(data.data).toEqual(books);
            expect(data.status).toEqual(200);
        });
    });

    describe("test removeBooks() method", function () {
        it("return status 200 if success", function () {
            $httpBackend.expectDELETE(url + 1).respond({});
            var status;
            bookService.removeBooks(1).then(function (result) {
                status = result;
            });
            $httpBackend.flush();
            expect(status.status).toEqual(200);
        });
        it("return status 404 if not found", function () {
            $httpBackend.expectDELETE(url + 1).respond(404, "");
            var data;
            var errorFunction = function (response) {
                data = response;
            }
            var successFunction = function (response) {
                data = response;
            }
            bookService.removeBooks(1).then(successFunction, errorFunction);
            $httpBackend.flush();
            expect(data.status).toEqual(404);
        });
    });

    describe("test addBook() method", function () {
        it("return status 200 if success", function () {
            var book = { "id": "3", "title": "Nineteen Eighty-Four", "year": "1949", "authorId": "3", "author": { "id": "3", "firstName": "George", "lastName": "Orwell" } };
            $httpBackend.expectPOST(url, { "book": book }).respond({});
            var status;
            bookService.addBook(book).then(function (result) {
                status = result;
            });
            $httpBackend.flush();
            expect(status.status).toEqual(200);
        });

    });

    describe("test updateBook() method", function () {
        var book = { "id": "3", "title": "Nineteen Eighty-Four", "year": "1949", "authorId": "3", "author": { "id": "3", "firstName": "George", "lastName": "Orwell" } };
        it("return status 200 if success", function () {
            $httpBackend.expectPUT(url, { "id": book.id, "book": book }).respond({});
            var status;
            bookService.updateBook(book.id, book).then(function (result) {
                status = result;
            });
            $httpBackend.flush();
            expect(status.status).toEqual(200);
        });
        it("return status 404 if not found", function () {
            $httpBackend.expectPUT(url, { "id": book.id, "book": book }).respond(404, "");
            var data;
            var errorFunction = function (response) {
                data = response;
            }
            var successFunction = function (response) {
                data = response;
            }
            bookService.updateBook(book.id, book).then(successFunction, errorFunction);
            $httpBackend.flush();
            expect(data.status).toEqual(404);
        });
    });

});