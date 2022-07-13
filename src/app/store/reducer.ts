import { createReducer, on } from '@ngrx/store';
import { cloneDeep } from 'lodash';
import { increment, FetchBooksSuccess } from './actions';

export const counterFeatureKey = 'counter';

export interface BookDTO {
  id: string;
  name: string;
}

export interface State {
  count: number;
  books: BookDTO[];
  abc: string
}

export const initialState: State = {
  count: 0,
  books: [],
  abc: ''
};

export const booksReducer = createReducer(
  initialState.books,
)
export const abcReducer = createReducer(
  initialState.abc,
)

export const reducer = createReducer(
  initialState,
  on(increment, (state) => ({ ...state, count: state.count + 1 })),
  on(FetchBooksSuccess, (state, { books }) => ({
    ...state,
    books: cloneDeep(books),
  }))
);
