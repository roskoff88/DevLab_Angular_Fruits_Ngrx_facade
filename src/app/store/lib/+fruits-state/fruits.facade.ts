import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';

import { FruitsState } from './fruits.reducer';
import { fruitsQuery, getFruitById } from './fruits.selectors';
import { fromFruitsActions } from './fruits.actions';
import { FruitInfo } from 'src/app/models/fruits-api.types';

@Injectable()
export class FruitsFacade {
  loaded$        = this.store.select(fruitsQuery.getLoaded);
  allFruits$     = this.store.select(fruitsQuery.getAllFruits);
  selectedFruit$ = this.store.select(fruitsQuery.getSelectedFruit);
  selectedId$ = this.store.select(fruitsQuery.getSelectedId);
  
  currentFruit$ = this.selectedFruit$.pipe(
    filter((selectedFruit) => !!selectedFruit),
    map((selectedFruit) => selectedFruit)
  );

  constructor(private store: Store<FruitsState>) {}

  loadAll() {
    this.loaded$.pipe(take(1), filter((loaded) => !loaded)).subscribe(() => {
      this.store.dispatch(new fromFruitsActions.LoadFruits());
    });
  }

  getFruitById$(id: number):Observable<FruitInfo | undefined>  {
    return this.store.select(getFruitById(id));
  }

  updateSelectedId(selectedId: number): void {
   this.store.dispatch(new fromFruitsActions.UpdatedFruitSelectedId(selectedId));
  }

  updateFruitCalories(calories: number): void {
    this.selectedId$.pipe(take(1)).subscribe((fruitId: number | undefined) => {
      if (fruitId){
        this.store.dispatch(new fromFruitsActions.UpdateFruitCalories({fruitId, calories}));
      }
    })
  }
}
