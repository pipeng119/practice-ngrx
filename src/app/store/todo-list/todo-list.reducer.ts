import { createReducer, on } from '@ngrx/store';
import {
  FetchTodoListStart,
  FetchTodoListSuccess,
  TodoListTypes,
} from './todo-list.actions';

export interface TodoListState {
  name: string;
  birthday: string;
  biography: string
}

const initTodoList: TodoListState[] = [
  {
    name: '',
    birthday: '',
    biography: ''
  },
];

export const todoListReducer = createReducer(
  initTodoList,
  on(FetchTodoListSuccess, (state, { data }) => data)
);
