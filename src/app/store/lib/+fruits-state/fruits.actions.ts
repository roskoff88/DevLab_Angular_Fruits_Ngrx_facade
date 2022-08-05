import { Action } from '@ngrx/store';
import { FruitInfo } from 'src/app/models/fruits-api.types';

export enum FruitsActionTypes {
  LoadFruits = '[Fruits] Load Fruits',
  FruitsLoaded = '[Fruits] Fruits Loaded',
  FruitsLoadError = '[Fruits] Fruits Load Error',

  UpdatedFruitSelectedId = '[Fruits] Fruit Selected ID Updated',
  UpdateFruitCalories = '[Fruits] Fruit Update Calory',
}

export class LoadFruits implements Action {
  readonly type = FruitsActionTypes.LoadFruits;
}

export class FruitsLoadError implements Action {
  readonly type = FruitsActionTypes.LoadFruits;
  constructor(public payload: any) {}
}

export class FruitsLoaded implements Action {
  readonly type = FruitsActionTypes.FruitsLoaded;
  constructor(public payload: FruitInfo[]) {}
}

export class UpdatedFruitSelectedId implements Action {
  readonly type = FruitsActionTypes.UpdatedFruitSelectedId;
  constructor(public selectedId: number) {}
}

export class UpdateFruitCalories implements Action {
  readonly type = FruitsActionTypes.UpdateFruitCalories;
  constructor(public payload: { fruitId: number, calories: number }) {}
}

export type FruitsAction = 
  LoadFruits | FruitsLoaded | FruitsLoadError | 
  UpdatedFruitSelectedId |
  UpdateFruitCalories;

export const fromFruitsActions = {
  LoadFruits,
  FruitsLoaded,
  FruitsLoadError,
  UpdatedFruitSelectedId,
  UpdateFruitCalories
};
