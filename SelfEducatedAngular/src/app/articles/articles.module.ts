import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { RouterModule } from '@angular/router';
import { articlesRoutes } from './articles.routes';
import { ArticleDetailEditComponent } from './article-detail-edit/article-detail-edit.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ArticleListComponent,
    ArticleDetailComponent,
    ArticleDetailEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(articlesRoutes)
  ]
})
export class ArticlesModule { }
