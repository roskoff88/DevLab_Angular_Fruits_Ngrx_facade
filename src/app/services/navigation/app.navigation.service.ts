import { Injectable } from '@angular/core';
import { NavigationExtras } from '@angular/router';

import { Observable } from 'rxjs';
import { FruitFlowPages } from '../../models/fruit-flow-steps.types';
import { AppNavigationInterface } from './app.navigation.interface';
import { NavigationService } from './support/navigation.service';


@Injectable()
export class AppFlowNavigationService implements AppNavigationInterface {
  constructor(private navigationService: NavigationService) {}

  goBackToHomePage() {
    return this.navigateTo(FruitFlowPages.Home);
  }

  goToDetailsPage(frutaId: string) {
    return this.navigateTo(FruitFlowPages.Details, {frutaId});
  }

  back(fromPage?: FruitFlowPages | string) {
    this.navigationService.back();
  }

  private navigateTo(page: FruitFlowPages, params?: { [key: string]: string | undefined }, extras?: NavigationExtras) {
    this.navigationService.navigateTo(page, params, extras);
  }

  private navigateTo$(
    page: FruitFlowPages,
    params?: { [key: string]: string | undefined },
    extras?: NavigationExtras
  ): Observable<boolean> {
    return this.navigationService.navigateTo$(page, params, extras);
  }
}
