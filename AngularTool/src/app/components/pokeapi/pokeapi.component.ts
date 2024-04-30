import { Component, OnInit } from '@angular/core';
import { PokemonApiService } from '../../services/pokemon-api.service';
import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'PokeapiComponent',
  templateUrl: './pokeapi.component.html',
  styleUrls: ['./pokeapi.component.css'],
})
export class PokeapiComponent implements OnInit {
  //1.-Declaracion de variables
  pokemons: Pokemon[] = [];

  pokemonsJhoto: Pokemon[] = [];

  pokemonsHoenn: Pokemon[] = [];

  pokeimg: string =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  selectPokemon(pokemon: Pokemon): void {
    console.log(pokemon);
  }

  //2.-Consumimos el servicio a traves del constructor
  constructor(private pokemonApi: PokemonApiService) {}

  //3.-Llamado de la funcion para consumir api
  ngOnInit(): void {
    this.getPokemons();
    this.getJhoto();
    this.getHoenn();
  }

  getpokeimgs(i: number): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
  }

  //funcion para consumir servicio de la api
  getPokemons(): void {
    //desestructuracion de objetos
    this.pokemonApi.getPokemons().subscribe(({ results }) => {
      this.pokemons = results;
    });
  }
  //funcion para llamar al servicio Jhoto
  getJhoto(): void {
    this.pokemonApi.getJhoto().subscribe(({ results }) => {
      this.pokemonsJhoto = results;
    });
  }

  //funcion para llamar a al servicio de hoenn
  getHoenn(): void {
    this.pokemonApi.getHoenn().subscribe(({ results }) => {
      this.pokemonsHoenn = results;
    });
  }

  //Funcion para mostrar la primera letra de un string en mayuscula

  capitalizeFirstLetter(str: string): string {
    const firstLetter = str.charAt(0);
    const capitalizedFirstLetter = firstLetter.toUpperCase();
    const restOfStr = str.slice(1);
    const capitalizedStr = capitalizedFirstLetter + restOfStr;
    return capitalizedStr;
  }
}
