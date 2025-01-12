import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from '../app/components/book-list/book-list.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'books', component: BookListComponent },
];
