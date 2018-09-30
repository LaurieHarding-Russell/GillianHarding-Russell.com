import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralComponent } from './general/general';
import { AboutComponent } from './about/about';
import { BooksComponent } from './books/books';

const routes: Routes = [
    {
      path: "",
      pathMatch: "full",
      component: GeneralComponent
    },
    {
      path: "about",
      component: AboutComponent
    },
    {
      path: "books",
      component: BooksComponent
    },
    {
      path: "**",
      redirectTo: ""
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
