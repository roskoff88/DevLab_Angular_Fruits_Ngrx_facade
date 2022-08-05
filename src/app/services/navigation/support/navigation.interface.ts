import { NavigationExtras, Params } from "@angular/router";
import { Observable } from "rxjs";
import { FruitFlowPages } from "src/app/models/fruit-flow-steps.types";

export abstract class NavigationInterface {
    abstract navigateTo(page: FruitFlowPages, params?: Params, navigationExtras?: NavigationExtras): Promise<boolean>;
    abstract navigateTo$(page: FruitFlowPages, params?: Params, navigationExtras?: NavigationExtras): Observable<boolean>;
    abstract back(fromPage?: FruitFlowPages | string): void;
}

