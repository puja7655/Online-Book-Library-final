import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BookDetail } from '../model/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookDetailService {
  private productUrl = 'api/bookDetail';
  constructor(private _http: HttpClient) { }

  public getBooks(): Observable<BookDetail[]> {
    return this._http.get<BookDetail[]>(this.productUrl);
  }

  createBookInfo(bookDetail: BookDetail) {
    return this._http.post(this.productUrl, bookDetail);
  }

  getBookById(id: number) {
    return this._http.get<BookDetail>(this.productUrl + '/' + id);
  }
  updateBookInfo(bookDetail: BookDetail) {
    return this._http.put(this.productUrl + '/' + bookDetail.id, bookDetail);
  }
}