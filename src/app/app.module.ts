import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { CsaladfaComponent } from './csaladfa/csaladfa.component';
import { CsaladfapostComponent } from './csaladfapost/csaladfapost.component';
import { MacsekComponent } from './macsek/macsek.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CsaladfaComponent,
    CsaladfapostComponent,
    MacsekComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
