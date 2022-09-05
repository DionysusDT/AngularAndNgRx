import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesGuard } from './guards/articles.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'articles',
    loadChildren: () => import('./articles/articles.module').then(m => m.ArticlesModule),
    // canActivate:[ArticlesGuard]
    canLoad:[ArticlesGuard]
  }
]
  // {
  //   path:'home/child',
  //   component:ChildHomeComponent
  // },


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//
