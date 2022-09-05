import {Injectable} from '@angular/core';
import { ofType, Actions, createEffect} from '@ngrx/effects';
import { catchError, map, merge, mergeMap, Observable, of } from 'rxjs';
import { ShoppingService } from 'src/app/shopping.service';
import { AddItemAction, AddItemFailureAction, AddItemSuccessAction, DeleteItemAction, DeleteItemFailureAction, DeleteItemSuccessAction, LoadShoppingAction, LoadShoppingFailureAction, LoadShoppingSuccessAction, ShoppingActionTypes } from '../actions/shopping.action';

@Injectable()
export class ShoppingEffects {
  loadShopping$ = createEffect( ()=> this.action$
    .pipe(
      ofType<LoadShoppingAction>(ShoppingActionTypes.LOAD_SHOPPING),
      mergeMap(
        () => this.shoppingService.getShoppingItems()
          .pipe(
            map(data => new LoadShoppingSuccessAction(data)),
            catchError(error => of(new LoadShoppingFailureAction(error)))
          )
      )
    )
  )
  addShoppingItem$ = createEffect( ()=> this.action$
    .pipe(
      ofType<AddItemAction>(ShoppingActionTypes.ADD_ITEM),
      mergeMap(
        (data) => this.shoppingService.addShoppingItem(data.payload)
          .pipe(
            map(() => new AddItemSuccessAction(data.payload)),
            catchError(error => of(new AddItemFailureAction(error)))
          )
      )
    )
  )
  deteteShoppingItem$ = createEffect( ()=> this.action$
    .pipe(
      ofType<DeleteItemAction>(ShoppingActionTypes.DELETE_ITEM),
      mergeMap(
        (data) => this.shoppingService.deleteShoppingItem(data.payload)
          .pipe(
            map(() => new DeleteItemSuccessAction(data.payload)),
            catchError(error => of(new DeleteItemFailureAction(error)))
          )
      )
    )
  )


  constructor(private action$: Actions, private shoppingService: ShoppingService){

  }
}
