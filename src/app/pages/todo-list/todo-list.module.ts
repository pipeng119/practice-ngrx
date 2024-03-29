import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListRoutingModule } from './todo-list-routing.module';
import { TodoListComponent } from './todo-list.component';
import { StoreModule } from '@ngrx/store';
import { todoListReducer } from 'src/app/store/todo-list/todo-list.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodoListEffects } from 'src/app/store/todo-list/todo-list.effect';
import { NzShareModule } from 'src/app/nz-share.module';

@NgModule({
  declarations: [TodoListComponent],
  imports: [
    CommonModule,
    TodoListRoutingModule,
    NzShareModule,
    StoreModule.forFeature('todoList', todoListReducer),
    EffectsModule.forFeature([TodoListEffects]),
  ],
})
export class TodoListModule {}
