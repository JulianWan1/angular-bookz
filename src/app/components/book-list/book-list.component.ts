import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Book } from '../../interfaces/book.model';
import { BookService } from '../../service/book.service';
import { BookCreateFormComponent } from '../book-create-form/book-create-form.component';
import { MatTableModule } from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-book-list',
  imports: [MatTableModule, MatIcon],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  displayedColumns: string[] = [
    'id',
    'title',
    'description',
    'version',
    'actions',
  ];

  constructor(public dialog: MatDialog) {}

  bookService = inject(BookService);

  ngOnInit(): void {
    this.fetchBooks();
  }

  fetchBooks(): void {
    this.bookService.getBooks().subscribe((data) => (this.books = data));
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(BookCreateFormComponent, {
      width: '400px',
      data: { mode: 'create' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.fetchBooks();
      }
    });
  }

  openUpdateDialog(book: Book): void {
    const dialogRef = this.dialog.open(BookCreateFormComponent, {
      width: '400px',
      data: { mode: 'update', book },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.fetchBooks();
      }
    });
  }

  deleteBook(id: number): void {
    this.bookService.deleteBook(id).subscribe(() => this.fetchBooks());
  }
}
