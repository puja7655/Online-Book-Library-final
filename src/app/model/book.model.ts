export class BookDetail {
    'id': number;
    'bookName': string;
    'count': number;
    'authorName': string;
    'description': string;

    setData(book: any) {
        this.id = book.id;
        this.bookName = book.bookName;
        this.authorName = book.authorName;
        this.count = book.count;
        this.description = book.description;
    }
}

