import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonApiService } from '../../services/pokemon-api.service';
import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  pokemon?: Pokemon;

  constructor(
    private route: ActivatedRoute,
    private pokemonApi: PokemonApiService
  ) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(): void {
    const id = 1;
    this.pokemonApi.getPokemonById(id).subscribe(pokemon => this.pokemon = pokemon);
  }
}