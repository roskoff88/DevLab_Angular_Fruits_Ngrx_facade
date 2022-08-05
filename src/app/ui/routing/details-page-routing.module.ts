import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FruitsService } from 'src/app/services/fruits/fruits.service';
import { FruitsFacadeService } from 'src/app/services/fruits/fruits.facade.service';

import { DetailsPageComponent} from '../pages/detail-page/details-page.component';
import { AppCardComponent } from '../components/common/card/card.component';

export const routes: Routes = [
    {
        path: '',
        component: DetailsPageComponent,
    },
];

@NgModule({
    declarations: [
        DetailsPageComponent,
        AppCardComponent
    ],
    providers: [
        FruitsService,
        FruitsFacadeService
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [RouterModule],
})
export class DetailsPageRoutingModule { }
