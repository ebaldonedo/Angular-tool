import { Component, OnInit } from '@angular/core';
import {PokemonApiService  } from '../../services/pokemon-api.service';
import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'PokeapiComponent',
  templateUrl: './pokeapi.component.html',
  styleUrls: ['./pokeapi.component.css']
})
export class PokeapiComponent implements OnInit {
  pokemons: Pokemon[] = [];
  pokemonArray: Pokemon[] = [];
  pokeimg: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';

  constructor(private pokemonApi: PokemonApiService) { }

  ngOnInit(): void {
    this.getPokemons();
   
    
  }

  getPokemons(): void {
    this.pokemonApi.getPokemons().subscribe(pokemons => {
        this.pokemons = pokemons
        this.pokemonArray = Array.from(pokemons.results);
        console.log(this.pokemonArray);
      });
  }
}


