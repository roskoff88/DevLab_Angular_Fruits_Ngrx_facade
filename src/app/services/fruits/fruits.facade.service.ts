import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { FruitInfo } from '../../models/fruits-api.types';
import { FruitsService } from './fruits.service';
import { FruitServiceInterface } from './fruits.service.interface';

// @Url: https://www.fruityvice.com/doc/index.html#api-GET-GET

@Injectable({ providedIn: 'root' })
export class FruitsFacadeService implements FruitServiceInterface {

    getFruits$(): Observable<FruitInfo[]> {
        return this.fruitsService.getFruits$();
    }

    getFruitInfo$(id: string): Observable<FruitInfo> {
        return this.fruitsService.getFruitInfo$(id);
    }

    constructor(private fruitsService: FruitsService) { }
}
