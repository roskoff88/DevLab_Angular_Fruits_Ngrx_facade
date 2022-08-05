interface NutricionInfo {
    carbohidratos: number;
    proteina: number;
    fat: number;
    calorias: number;
    azucar: number;
}

export interface FruitInfo {
    id: number;
    nombre: string;
    genero: string;
    familia: string;
    nombreImagen: string;
    imagenUrl?: string;
    origen: string;
    nutriciones: NutricionInfo;
}


export interface GetFruitsResponse  {
    frutas: FruitInfo [];
}
