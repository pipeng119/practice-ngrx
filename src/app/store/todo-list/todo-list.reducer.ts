import { createReducer, on } from '@ngrx/store';
import {
  FetchTodoListStart,
  FetchTodoListSuccess,
  TodoListTypes,
} from './todo-list.actions';

export interface TodoListState {
  name: string;
  date: string;
}

const initTodoList: TodoListState[] = [
  {
    name: '',
    date: new Date().toLocaleDateString(),
  },
];

export const todoListReducer = createReducer(
  initTodoList,
  on(FetchTodoListSuccess, (state, { data }) => data)
);
