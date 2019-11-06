import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about';
import { MenuComponent } from './menu/menu';
import { GeneralComponent } from './general/general';
import { BookListComponent } from './book-list/book-list';
import { BookComponent } from './book-list/book/book';
import { AwardsComponent } from './awards/awards';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AwardsComponent,
    BookComponent,
    BookListComponent,
    GeneralComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
