import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MapComponent} from './map/map.component';
import {GameDayComponent} from './game-day/game-day.component';
import {StatsComponent} from './stats/stats.component';
import {ReserveComponent} from './reserve/reserve.component';
import {OtherLotsComponent} from './other-lots/other-lots.component';

const routes = [
  {path: '', redirectTo: 'map/54', pathMatch: 'full'},
  {path: 'map/:lotNumber', component: MapComponent},
  {path: 'gameday', component: GameDayComponent},
  {path: 'statistics', component: StatsComponent},
  {path: 'reservation', component: ReserveComponent},
  {path: 'other', component: OtherLotsComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
