import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers } from './store';
import {
  abcReducer,
  booksReducer,
  counterFeatureKey,
  reducer,
} from './store/reducer';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [AppComponent, BookComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ abc: abcReducer, books: booksReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
