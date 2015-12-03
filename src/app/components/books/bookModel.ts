"use strict";

module AppModule {

    export class Author {
        id: number;
        firstName: string;
        lastName: string;
    }

    export class Book {
        id: number;
        title: string;
        year: number;
        authorId: number;
        author: Author;
    }
}