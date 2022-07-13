import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { HasDrinkResolver } from './has-drink.resolver';

const routes: Routes = [
  {
    path: 'book',
    component: BookComponent,
    data: {
      address: '108 road',
      isOpen: true
    },
    resolve: {
      hasDrink: HasDrinkResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
