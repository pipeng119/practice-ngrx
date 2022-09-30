import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/todolist' },
  {
    path: 'todolist',
    loadChildren: () =>
      import('./pages/todo-list/todo-list.module').then(
        (m) => m.TodoListModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
