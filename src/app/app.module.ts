import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { BroadcastsComponent } from './broadcasts/broadcasts.component';
import { Plataforma14Component } from './plataforma14/plataforma14.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    TournamentsComponent,
    BroadcastsComponent,
    Plataforma14Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
