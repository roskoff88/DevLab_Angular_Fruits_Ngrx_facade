import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FruitInfo } from 'src/app/models/fruits-api.types';
import { FruitsFacade } from 'src/app/store';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {
  fruitList$: Observable<FruitInfo[]> = this.fruitService.allFruits$;
  fruitList: FruitInfo[] | undefined;

  constructor(private fruitService: FruitsFacade) {
    this.fruitService.loadAll();
  }
}
