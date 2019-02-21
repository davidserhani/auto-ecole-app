import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EleveListeComponent } from './components/eleve-liste/eleve-liste.component';
import { EleveCardComponent } from './components/eleve-card/eleve-card.component';

@NgModule({
  declarations: [
    AppComponent,
    EleveListeComponent,
    EleveCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
