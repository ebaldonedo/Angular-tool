import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PokeapiComponent } from './components/pokeapi/pokeapi.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PokeapiComponent,
    PokemonDetailComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'Home', component: HomeComponent},
      {path: 'Pokeapi', component: PokeapiComponent},
      {path: 'Pokemon', component: PokemonDetailComponent},
      
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
