import { Observable } from "rxjs";
import { FruitInfo } from "src/app/models/fruits-api.types";

export abstract class FruitServiceInterface {
    abstract getFruits$(): Observable<FruitInfo[]>;
    abstract getFruitInfo$(id: string): Observable<FruitInfo>;
}
