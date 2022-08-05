import { Injectable } from '@angular/core';
import { catchError, map, mergeMap } from 'rxjs/operators'
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FruitsActionTypes } from './fruits.actions';
import { FruitsFacadeService } from 'src/app/services/fruits/fruits.facade.service';

@Injectable()
export class FruitsEffects {

  loadFruits$ = createEffect(() => this.actions$.pipe(
    ofType(FruitsActionTypes.LoadFruits),
    mergeMap(() => this.fruitsService.getFruits$()
      .pipe(
        map(fruits => ({ type: FruitsActionTypes.FruitsLoaded, payload: fruits })),
        catchError(async (error) => ({ type: FruitsActionTypes.FruitsLoadError, error }))
      ))
    )
  )

  constructor(
    private actions$: Actions,
    private fruitsService: FruitsFacadeService
  ) {}
}
