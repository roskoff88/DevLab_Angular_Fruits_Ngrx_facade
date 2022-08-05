import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { AppFlowParamsNames } from 'src/app/models/fruit-flow-steps.types';
import { FruitInfo } from 'src/app/models/fruits-api.types';
import { AppFlowNavigationService } from 'src/app/services/navigation/app.navigation.service';
import { FruitsFacade } from 'src/app/store';

const notFoundError = 'NOT_FOUND';

@Component({
  selector: 'details-page',
  templateUrl: './details-page.component.html'
})
export class DetailsPageComponent implements OnInit {

  public fruitId$: Observable<string | undefined> = this.activatedRoute.params.pipe(
    map((params: any) => params[AppFlowParamsNames.FrutaId])
  );

  public fruitId!: string;

  public fruitInfo$!: Observable<FruitInfo | undefined>;

  public currentFruit$ = this.fruitService.currentFruit$;
  public currentFruit!: FruitInfo | undefined;

  public calories = new FormControl(null);

  constructor(private activatedRoute: ActivatedRoute, private appFlowNavigationService: AppFlowNavigationService, private fruitService: FruitsFacade) {
    this.fruitService.loadAll();
  }

  ngOnInit() {
    this.fruitId$.pipe(take(1)).subscribe((fruitId: string | undefined) => {
      this.fruitId = fruitId || notFoundError;
      if (this.fruitId === notFoundError) {
        return;
      }
      const id = parseInt(this.fruitId);
      this.fruitService.updateSelectedId(id);
      this.currentFruit$.pipe(filter((currentFruit) => !!currentFruit)).subscribe((currentFruit) => {
        this.currentFruit = currentFruit;
      });
      this.fruitInfo$ = this.fruitService.getFruitById$(id);
    });

  }

  onBack() {
    this.appFlowNavigationService.goBackToHomePage();
  }

  onSubmit() { 
    if (!this.calories.valid) {
      return;
    }
    this.fruitService.updateFruitCalories(parseInt(this.calories.value));
  }
}
