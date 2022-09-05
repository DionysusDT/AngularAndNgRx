import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  article$ : Observable<Article[]>;

  constructor(private readonly articleService: ArticleService) { }

  ngOnInit(): void {
    this.article$ = this.articleService.articles$;
  }

}
