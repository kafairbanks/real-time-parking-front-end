import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { DotComponent } from './dot/dot.component';
import { AppRoutingModule } from './app-routing.module';
import { GameDayComponent } from './game-day/game-day.component';
import { StatsComponent } from './stats/stats.component';
import { ReserveComponent } from './reserve/reserve.component';
import { OtherLotsComponent } from './other-lots/other-lots.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    DotComponent,
    GameDayComponent,
    StatsComponent,
    ReserveComponent,
    OtherLotsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
