import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

import { CountingComponent } from './counting/counting.component';
import { Lab4Component } from './Lab4Component/lab4.component';

import { CatComponent } from './home/CategoryMenuComponent/cat.component';
import { NavbarComponent } from './home/NavbarComponent/navbar.component';
import { SearchBarComponent } from './home/NavbarComponent/SearchBarComponent/searchbar.component';
import { TopbannerComponent } from './home/TopBannerComponent/topbanner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountingComponent,
    Lab4Component,
    CatComponent,
    NavbarComponent,
    SearchBarComponent,
    TopbannerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
