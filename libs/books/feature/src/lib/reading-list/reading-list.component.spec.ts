import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { createReadingListItem, SharedTestingModule } from '@tmo/shared/testing';

import { ReadingListComponent } from './reading-list.component';
import { BooksFeatureModule } from '@tmo/books/feature';

describe('ReadingListComponent', () => {
  let component: ReadingListComponent;
  let fixture: ComponentFixture<ReadingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BooksFeatureModule, SharedTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call store dispatch method with markBookAsRead is called', () => {
    const spy = spyOn(component['store'], 'dispatch');
    const readingListItem = createReadingListItem('test_id');

    component.markBookAsRead(readingListItem);

    expect(spy).toHaveBeenCalled();
  });
});
