import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { BookService } from '../../service/book.service';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-book-form',
  imports: [ReactiveFormsModule, MatFormFieldModule],
  templateUrl: './book-create-form.component.html',
  styleUrls: ['./book-create-form.component.scss'],
})
export class BookCreateFormComponent {
  bookForm: FormGroup;
  mode: 'create' | 'update';

  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    public dialogRef: MatDialogRef<BookCreateFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.mode = data.mode;
    this.bookForm = this.fb.group({
      id: [data.book?.id || '', [Validators.required]],
      title: [data.book?.title || '', [Validators.required]],
      description: [data.book?.description || '', [Validators.required]],
      version: [data.book?.version || ''],
    });
  }

  save(): void {
    if (this.bookForm.valid) {
      const book = this.bookForm.value;
      if (this.mode === 'create') {
        this.bookService
          .createBook(book)
          .subscribe(() => this.dialogRef.close(true));
      } else if (this.mode === 'update') {
        this.bookService
          .updateBook(book)
          .subscribe(() => this.dialogRef.close(true));
      }
    }
  }

  cancel(): void {
    this.dialogRef.close(false);
  }
}
