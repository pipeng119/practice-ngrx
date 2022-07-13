import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from './store';
import { FetchBooksSuccess } from './store/actions';
import { counterFeatureKey, State } from './store/reducer';
import { selectorBooks } from './store/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'practice-ngrx';
  constructor(private store: Store<State>) {
    this.store.pipe(select(selectorBooks)).subscribe(console.log);

    this.store.dispatch(
      FetchBooksSuccess({ books: [{ id: '1', name: 'haha' }] })
    );
  }
}
