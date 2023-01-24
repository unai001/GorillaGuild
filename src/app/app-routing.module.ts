import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BroadcastsComponent} from "./broadcasts/broadcasts.component";
import {TournamentsComponent} from "./tournaments/tournaments.component";
import {Plataforma14Component} from "./plataforma14/plataforma14.component";
import {MainPageComponent} from "./main-page/main-page.component";

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'broadcasts', component: BroadcastsComponent },
  { path: 'torneos', component: TournamentsComponent },
  { path: 'plataforma14', component: Plataforma14Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
