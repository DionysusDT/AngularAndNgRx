import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, Observable, switchMap , pluck, map, of} from 'rxjs';
import { Article } from '../../models/article.model';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  article$ : Observable<Article>;
  constructor(private readonly route:ActivatedRoute, private readonly articleService: ArticleService ) { }

  ngOnInit(): void {
    let slug = this.route.snapshot.paramMap.get('slug');
    this.article$ = this.articleService.getArticle(slug);
  }


}
