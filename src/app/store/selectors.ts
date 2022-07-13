import { createSelector } from '@ngrx/store';
import { State } from './reducer';

export const selectorFeature = (state: State) => state;

export const selectorBooks = createSelector(
  selectorFeature,
  (state) => state.books
);
