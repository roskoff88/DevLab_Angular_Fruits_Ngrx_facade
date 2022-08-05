import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import { FruitsStateModule } from './store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppFlowNavigationService } from './services/navigation/app.navigation.service';
import { NavigationService } from './services/navigation/support/navigation.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    /*
    StoreModule.forRoot({}, {
      metaReducers: !environment.production ? [storeFreeze] : []
    }),
    */
    StoreModule.forRoot(
      {},
      {
        runtimeChecks: {
          strictActionWithinNgZone: true,
          strictStateImmutability: false,
          strictActionImmutability: false
        }
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    FruitsStateModule
  ],
  providers: [
    NavigationService,
    AppFlowNavigationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
