import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FruitInfo } from 'src/app/models/fruits-api.types';
import { FruitsState } from './fruits.reducer';

// Lookup the 'Fruits' feature state managed by NgRx
const getFruitsState = createFeatureSelector<FruitsState>('fruits');

const getLoaded = createSelector( getFruitsState, (state: FruitsState) => state.loaded );
const getError = createSelector( getFruitsState, (state: FruitsState) => state.error );
const getSelectedId = createSelector(getFruitsState, (state: FruitsState) => state.selectedId);

const getAllFruits = createSelector(getFruitsState, getLoaded, (state: FruitsState, isLoaded) => {
  return isLoaded ? state.list : [ ];
});

const getSelectedFruit = createSelector( getAllFruits, getSelectedId, (fruits, id) => {
  if (!fruits.length) {
    return;
  }
  const result = fruits.find(fruit => fruit['id'] === id);
  return result ? Object.assign({}, result) : undefined;
});

export const fruitsQuery = {
  getLoaded,
  getError,
  getAllFruits,
  getSelectedId,
  getSelectedFruit
};

export const getFruitById = (id: number) => createSelector (
  getAllFruits,
  (fruits: FruitInfo[]) => {
    if (!fruits.length) {
      return;
    }
    const result = fruits.find(fruit => fruit['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
)