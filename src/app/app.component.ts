import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookCreateFormComponent } from './components/book-create-form/book-create-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BookListComponent, BookCreateFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'book-app';
}
