import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent} from '../pages/home-page/home-page.component';
import { FrutaShortViewComponent} from '../components/fruit-short-view/fruit-short-view.component';
import { FruitsService} from '../../services/fruits/fruits.service';
import { FruitsMockService } from 'src/app/services/fruits/fruits.mock.service';
import { FruitsFacadeService } from 'src/app/services/fruits/fruits.facade.service';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
    },
];

@NgModule({
    providers: [    
        // Ejemplo de servicio usando datos moqueados
        /*
        {
            provide: FruitsService,
            useClass: FruitsMockService
        },
        */
        FruitsService,
        FruitsFacadeService
    ],
    declarations: [
        HomePageComponent,
        FrutaShortViewComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule
    ],
    exports: [RouterModule],
})
export class HomePageRoutingModule { }
