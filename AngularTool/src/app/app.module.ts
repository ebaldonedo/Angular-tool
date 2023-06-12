import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PokeapiComponent } from './components/pokeapi/pokeapi.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PokeapiComponent,


  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'Home', component: HomeComponent},
      {path: 'Pokeapi', component: PokeapiComponent},


    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
