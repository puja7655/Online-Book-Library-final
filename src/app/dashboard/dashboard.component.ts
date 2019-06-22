import { Component, OnInit } from '@angular/core';
import { BookDetailService } from '../services/book-detail.service';
import { BookDetail } from '../model/book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private bookDetailService: BookDetailService, private router: Router) { }
  public pageTitle = 'Book List';
  public listFilter = '';
  public rowData: any[];
  public isEdit: boolean;

  ngOnInit() {
    this.bookDetailService.getBooks().subscribe(response => { this.rowData = response; });
  }

  reset() {
    this.listFilter = '';
  }

  editBook(bookDetail: BookDetail): void {
    localStorage.removeItem('editBookId');
    localStorage.setItem('editBookId', bookDetail.id.toString());
    this.router.navigate(['bookDetail']);
  }

  filterCondition(book) {
    return book.bookName.toLowerCase().indexOf(this.listFilter.toLowerCase()) !== -1;
  }
}

