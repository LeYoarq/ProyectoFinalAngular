import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { HeaderComponent } from 'src/app/shared/header/header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from 'src/app/shared/footer/footer/footer.component';
import { BrowserModule } from '@angular/platform-browser'
import { RubiasComponent } from './cervezas/components/rubias/rubias.component';
import { TostadasComponent } from './cervezas/components/tostadas/tostadas.component';
import { RojasComponent } from './cervezas/components/rojas/rojas.component';



@NgModule({
  declarations: [
    PagesComponent,
    HeaderComponent,
    FooterComponent,
    RubiasComponent,
    TostadasComponent,
    RojasComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    HttpClientModule
  ]
})
export class PagesModule { }
