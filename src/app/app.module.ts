import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';



import { LoggedUserComponent } from './logged-user/logged-user.component';
import { CompetitionsListComponent } from './competitions-list/competitions-list.component';
import { CompetitionComponent } from './competition/competition.component';
import { UserCompetitionCardComponent } from './user-competition-card/user-competition-card.component';




@NgModule({
  declarations: [
    AppComponent,
    LoggedUserComponent,
    CompetitionsListComponent,
    CompetitionComponent,
    UserCompetitionCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
