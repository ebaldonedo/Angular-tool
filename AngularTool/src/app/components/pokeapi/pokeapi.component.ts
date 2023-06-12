import { Component, OnInit } from '@angular/core';
import {PokemonApiService  } from '../../services/pokemon-api.service';
import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'PokeapiComponent',
  templateUrl: './pokeapi.component.html',
  styleUrls: ['./pokeapi.component.css']
})
export class PokeapiComponent implements OnInit {
//1.-Declaracion de variables
  pokemons: Pokemon[] = [];
  pokemonArray: Pokemon[] = [];
  pokedex: []= []
  pokeimg: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

//2.-Consumimos el servicio a traves del constructor
  constructor(private pokemonApi: PokemonApiService) { }

//3.-Llamado de la funcion para consumir api
  ngOnInit(): void {
    this.getPokemons();
    //this.getPokemon()


  }

  getpokeimgs(i:any):any{
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`

  }

//funcion para consumir api
  getPokemons(): void {
    this.pokemonApi.getPokemons().subscribe(pokemons => {
        this.pokemons = pokemons
        this.pokemonArray = Array.from(pokemons.results);
        console.log(this.pokemonArray);
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



  getPokemon(): void{
    this.pokemonApi.getPokemonImg(1).subscribe(poke=>{
      this.pokeimg= poke
    })

  }
}


