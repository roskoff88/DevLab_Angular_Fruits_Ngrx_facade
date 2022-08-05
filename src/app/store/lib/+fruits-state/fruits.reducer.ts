import { FruitInfo } from 'src/app/models/fruits-api.types';
import { FruitsAction, FruitsActionTypes } from './fruits.actions';

/**
 * Interface for the 'FruitInfo' data used in
 *  - FruitsState, and
 *  - FruitsReducer
 *
 */

export interface FruitsState {
  list: FruitInfo[]; 
  selectedId?: number;
  loaded: boolean; 
  error?: any; 
}

export const initialState: FruitsState = {
  list: [],
  loaded: false
};

export function fruitsReducer(
  state: FruitsState = initialState,
  action: FruitsAction
): FruitsState {
  switch (action.type) {
    case FruitsActionTypes.FruitsLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
    case FruitsActionTypes.UpdateFruitCalories: {
      const { fruitId, calories } = action.payload;
      let newList = [...state.list];
      let fruitIndex = state.list.findIndex((fruit) => fruit.id === fruitId);
      newList[fruitIndex].nutriciones.calorias = calories; 

      state = {
        ...state,
        list: newList
      };
      break;
    }
    case FruitsActionTypes.UpdatedFruitSelectedId: {
      const { selectedId } = action;
      state = {
        ...state,
        selectedId
      };
      break;
    }
  }
  return state;
}
