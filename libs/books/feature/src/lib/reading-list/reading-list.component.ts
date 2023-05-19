import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { addToReadingList, getReadingList, removeFromReadingList } from '@tmo/books/data-access';

@Component({
  selector: 'tmo-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss']
})
export class ReadingListComponent {
  readingList$ = this.store.select(getReadingList);

  constructor(private readonly store: Store, private _snackBar: MatSnackBar) {}

  removeFromReadingList(item) {
    this.store.dispatch(removeFromReadingList({ item }));
    this.openSnackBar('Removed from Reading List', 'undo', item);
  }

  openSnackBar(message: string, action: string, book) {
    const snackBarRef = this._snackBar.open(message, action, { duration: 5000 });
    snackBarRef.onAction().subscribe(() => {
      this.store.dispatch(addToReadingList({ book }));
    });
  }
}
