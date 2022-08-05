import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppPages } from './models/app-pages.types';

const routes: Routes = [
  {
    path: AppPages.Home,
    loadChildren: () => import('./ui/routing/home-page-routing.module').then((m) => m.HomePageRoutingModule),
  },
  {
    path: AppPages.Details,
    loadChildren: () => import('./ui/routing/details-page-routing.module').then((m) => m.DetailsPageRoutingModule),
  },
  {
    path: '**', // Catch-all redirect to Home
    redirectTo: AppPages.Home,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
