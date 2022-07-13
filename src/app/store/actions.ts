import { createAction, props } from '@ngrx/store';
import { BookDTO } from './reducer';

export const increment = createAction('increment');
export const decrement = createAction('decrement');

export const StartFetchBooks = createAction('[Book Page] Start Fetch Book');
export const FetchBooksSuccess = createAction(
  '[Book Page] Fetch Book Success',
  props<{ books: BookDTO[] }>()
);
