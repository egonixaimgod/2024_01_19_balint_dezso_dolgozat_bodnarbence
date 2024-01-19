import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CsaladfaComponent } from './csaladfa/csaladfa.component';
import { CsaladfapostComponent } from './csaladfapost/csaladfapost.component';
import { MacsekComponent } from './macsek/macsek.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'csaladfa', component: CsaladfaComponent },
  { path: 'csaladfaPost', component: CsaladfapostComponent },
  { path: 'macsek', component: MacsekComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }