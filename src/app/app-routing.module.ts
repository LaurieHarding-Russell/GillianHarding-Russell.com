import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralComponent } from './general/general';
import { AboutComponent } from './about/about';
import { BookListComponent } from './book-list/book-list';
import { AwardsComponent } from './awards/awards';

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
      path: "awards",
      component: AwardsComponent
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
