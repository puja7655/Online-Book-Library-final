//Not using this custom pipe to perform search as of now
import { Pipe, PipeTransform } from '@angular/core';
import { BookDetail } from '../model/book.model';

@Pipe({
  name: 'searchBook'
})
export class SearchBookPipe implements PipeTransform {
  transform(value: BookDetail[], args?: string): BookDetail[] {
    const filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
    return (filter ? value.filter((book: BookDetail) =>
      book.bookName.toLocaleLowerCase().indexOf(filter) !== -1) : value);
  }
}
