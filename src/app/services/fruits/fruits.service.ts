import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map} from 'rxjs/operators';
import { FruitInfo, GetFruitsResponse } from '../../models/fruits-api.types';
import { FruitServiceInterface } from './fruits.service.interface';

// @Url: https://www.fruityvice.com/doc/index.html#api-GET-GET

enum FruitsErrors {
  LOAD_FRUITS = 'Error fetching frutas.',
}

const imagePath = (fruitName: string) => `assets/img/${fruitName}` 

@Injectable()
export class FruitsService implements FruitServiceInterface {
  private apiEndPoint = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  getFruits$(): Observable<FruitInfo[]> {
    const url = `${this.apiEndPoint}/api`;

    return this.httpClient
      .get<GetFruitsResponse>(url, {
        headers: { 'Content-Type': 'application/json' },
      })
      .pipe(
        map ((response) => response.frutas),
        map((frutas) => frutas.map((fruta) => ({
          ...fruta,
          imagenUrl: imagePath(fruta.nombreImagen)
        }))),
        catchError(() => {
          console.warn(FruitsErrors.LOAD_FRUITS);
          return of([]);
        })
      );
  }

  getFruitInfo$(id: string): Observable<FruitInfo> {
    return this.getFruits$().pipe(map((fruits) => fruits.find(fruit => fruit.id.toString() === id) || {} as FruitInfo));
  }
}
