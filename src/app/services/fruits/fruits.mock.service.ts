import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { mockFruitAlldata } from 'src/app/mocks/mock-fruits-all-api';
import { FruitServiceInterface } from './fruits.service.interface';

@Injectable()
export class FruitsMockService implements FruitServiceInterface {
    getFruits$(): Observable<any[]> {
        return of(mockFruitAlldata);
    }

    getFruitInfo$(id: string): Observable<any> {
        return of(mockFruitAlldata[0]);
    }
}
