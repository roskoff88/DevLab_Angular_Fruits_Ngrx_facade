import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { FruitsService } from 'src/app/services/fruits/fruits.service';

import { initialState as fruitsInitialState, fruitsReducer } from './+fruits-state/fruits.reducer';
import { FruitsEffects } from './+fruits-state/fruits.effects';
import { FruitsFacade } from './+fruits-state/fruits.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('fruits', fruitsReducer, {
      initialState: fruitsInitialState
    }),
    EffectsModule.forFeature([FruitsEffects])
  ],
  providers: [FruitsFacade, FruitsService]
})
export class FruitsStateModule {}
