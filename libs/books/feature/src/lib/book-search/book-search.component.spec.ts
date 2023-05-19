import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedTestingModule } from '@tmo/shared/testing';

import { BooksFeatureModule } from '../books-feature.module';
import { BookSearchComponent } from './book-search.component';
import { By } from '@angular/platform-browser';

describe('ProductsListComponent', () => {
  let component: BookSearchComponent;
  let fixture: ComponentFixture<BookSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BooksFeatureModule, NoopAnimationsModule, SharedTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should call searchBooks when something is value of search bar changes', fakeAsync(() => {
    const spy = spyOn(component, 'searchBooks');

    const input = fixture.debugElement.query(By.css('#searchInput'));
    input.nativeElement.value = 'angular';
    input.nativeElement.dispatchEvent(new Event('keyup'));

    tick(600);

    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  }));
});
