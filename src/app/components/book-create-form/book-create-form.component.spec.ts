import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCreateFormComponent } from './book-create-form.component';

describe('BookCreateFormComponent', () => {
  let component: BookCreateFormComponent;
  let fixture: ComponentFixture<BookCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookCreateFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
