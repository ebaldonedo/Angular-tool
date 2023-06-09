import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PokeapiComponent } from './components/pokeapi/pokeapi.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { MatTabsModule } from '@angular/material/tabs';
import { RickMortyCharsComponent } from './Rick_Morty/rick-morty-chars/rick-morty-chars.component';
import { RickMortyModuleModule } from './Rick_Morty/rick-morty.module.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PokeapiComponent,





  ],
  imports: [
    BrowserModule,
    RickMortyModuleModule,

    RouterModule.forRoot([
      {path: 'Home', component: HomeComponent},
      {path: 'Pokeapi', component: PokeapiComponent},
      {path: '', redirectTo: 'Home', pathMatch: 'full'},
      {path:"Pokeinfo", component: PokemonDetailComponent},
      {path:"RickMorty", component: RickMortyCharsComponent},



    ]),
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
