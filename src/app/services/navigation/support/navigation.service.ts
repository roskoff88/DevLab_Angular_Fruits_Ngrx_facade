import { Injectable } from '@angular/core';
import { NavigationExtras, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { from, Observable } from 'rxjs';

import { FruitFlowPages} from '../../../models/fruit-flow-steps.types';
import { NavigationInterface } from './navigation.interface';


@Injectable()
export class NavigationService implements NavigationInterface {
  private static routeForPage(page: FruitFlowPages, params?: { [key: string]: string | undefined }): string[] {
    switch (page) {
      case FruitFlowPages.Details: {
        if (params && params.frutaId) {
          return [FruitFlowPages.Details, page.split('/')[0], params.frutaId];
        }
        break;
      }
      default:
        return [page];
    }
    return [page];
  }
  constructor(private router: Router, private location: Location) {}

  navigateTo(page: FruitFlowPages, params?: Params, navigationExtras?: NavigationExtras): Promise<boolean> {
    return this.router
      .navigate(NavigationService.routeForPage(page, params), {
        queryParamsHandling: 'preserve',
        ...navigationExtras,
      })
      .catch((error) => {
        console.error(`navigateTo Failure - ${error}`, null, {});
        return false;
      });
  }

  navigateTo$(page: FruitFlowPages, params?: Params, navigationExtras?: NavigationExtras): Observable<boolean> {
    return from(this.navigateTo(page, params, navigationExtras));
  }

  back() {
    this.location.back();
  }
}
