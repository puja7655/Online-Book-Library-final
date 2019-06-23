import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookDetailService } from '../services/book-detail.service';
import { BookDetail } from '../model/book.model';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  addForm: FormGroup;
  btnvisibility = true;
  constructor(private formBuilder: FormBuilder, private router: Router, private bookDetailService: BookDetailService) { }
  bookFormLabel = 'Add Book Detail';
  bookFormBtn = 'Save';

  public submitted = false;
  public bookName;
  public authorName;
  public bookCount;
  public description;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      bookName: ['', Validators.required],
      authorName: ['', Validators.required],
      count: ['', [Validators.required, Validators.maxLength(3)]],
      description: ['', Validators.required]
    });
    const bookid = localStorage.getItem('editBookId');
    if (+bookid > 0) {
      this.bookDetailService.getBookById(+bookid).subscribe(data => {
        this.addForm.patchValue(data);
      });
      this.btnvisibility = false;
      this.bookFormLabel = 'Edit Employee';
      this.bookFormBtn = 'Update';
    }
  }

  onSubmit() {
    const book = new BookDetail();
    book.setData(this.addForm.value);
    this.bookDetailService.createBookInfo(book)
      .subscribe(data => {
        this.router.navigate(['dashboard']);
      },
        error => {
          alert(error);
        });
  }

  onUpdate() {
    const book = new BookDetail();
    book.setData(this.addForm.value);
    this.bookDetailService.updateBookInfo(book).subscribe(data => {
      this.router.navigate(['dashboard']);
    },
      error => {
        alert(error);
      });
  }

}
