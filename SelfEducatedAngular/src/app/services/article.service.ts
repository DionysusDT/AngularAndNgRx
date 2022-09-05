import { Injectable } from '@angular/core';
import { buffer, Observable, of, shareReplay } from 'rxjs';
import { Article } from '../models/article.model';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ArticleService {


  
  constructor() { }

  get articles$(){
    return of<Article[]>([
      {
        title:'title 1',
        body:'lorem 1',
        slug:'title-1'
      },
      {
        title:'title 2',
        body:'lorem 2',
        slug:'title-2'
      }
    ]).pipe(shareReplay(1));
  }

  getArticle(slug: string){
    return this.articles$.pipe(
      map(articles => articles.find(ar => ar.slug === slug))
    );
  }

}
