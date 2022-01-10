import { ContentOnly, NavContent } from "src/app/commons/utils/layout.utils";
import { BooksComponent } from "./books/books.component";

export const PUBLIC_STATES: Object[] = [
    {
        name : 'books',
        url  : '/',
        views:  NavContent(BooksComponent),
    },
];
