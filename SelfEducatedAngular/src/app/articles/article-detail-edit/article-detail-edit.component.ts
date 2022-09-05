import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { filter, map, Observable, of, Subject, switchMap, takeUntil ,take, shareReplay} from 'rxjs';
import { CheckDeactivate } from 'src/app/check-deactivate';
import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article-detail-edit',
  templateUrl: './article-detail-edit.component.html',
  styleUrls: ['./article-detail-edit.component.scss']
})
export class ArticleDetailEditComponent implements OnInit, CheckDeactivate{

  private readonly $destroy = new Subject();
  private initialFormValue: unknown;

  form$: Observable<FormGroup>;
  constructor(private fb:FormBuilder, private readonly route:ActivatedRoute, private readonly articleService: ArticleService ) { }

  checkDeactivate(): Observable<boolean>{
      let formValue = {};
      this.form$.pipe(take(1)).subscribe(form => {
        formValue = form.getRawValue();
      })
      console.log({...formValue})
      const isEdit = JSON.stringify(this.initialFormValue) != JSON.stringify(formValue)
      console.log(isEdit)
      return of(!isEdit || confirm('Do you want to cancel changes?'))
  }


  ngOnInit(): void {
    this.form$ = this.route.paramMap.pipe(
      map((params) => params.get('slug')),
      switchMap((slug) => this.articleService.getArticle(slug)),
      filter(article => !!article),
      switchMap(article =>
        of(this.initForm(article))
      ),
      shareReplay(1)
    );
  }
  initForm(article: Article):FormGroup{
    const form = this.fb.group({
      title:[article.title],
      body:[article.body]
    })
    this.initialFormValue = form.getRawValue();
    return form;
  }

}
