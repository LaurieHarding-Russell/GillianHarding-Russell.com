import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralComponent } from './general/general';
import { AboutComponent } from './about/about';
import { BookListComponent } from './book-list/book-list';

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
      component: BookListComponent
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
