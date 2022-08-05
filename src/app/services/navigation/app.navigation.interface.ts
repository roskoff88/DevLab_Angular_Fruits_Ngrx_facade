import { NavigationExtras, Params } from "@angular/router";
import { FruitFlowPages } from "src/app/models/fruit-flow-steps.types";

export abstract class AppNavigationInterface {
    abstract goBackToHomePage(page: FruitFlowPages, params?: Params, navigationExtras?: NavigationExtras): void;
    abstract goToDetailsPage(frutaId: string): void;
    abstract back(fromPage?: FruitFlowPages | string): void;
}
