import { Component, Input, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { FruitInfo } from 'src/app/models/fruits-api.types';

@Component({
  selector: 'app-fruit-short-view',
  templateUrl: './fruit-short-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FrutaShortViewComponent implements OnChanges {
  @Input()
  fruitList!: FruitInfo[] | null;

  public currentFruitList: FruitInfo[] | undefined;
  public isContentLoaded = false;

  ngOnChanges(changes: SimpleChanges) {
    this.isContentLoaded = !!this.fruitList;
    if (this.isContentLoaded) {
      this.currentFruitList = changes.fruitList.currentValue;
    }
  }
}
