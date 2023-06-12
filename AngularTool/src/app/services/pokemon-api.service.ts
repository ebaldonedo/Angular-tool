import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151';
  private img= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/pokemon`);
  }

  getPokemonImg(id: number): Observable<any> {
    return this.http.get<any>(`${this.img}${id}.png`);
  }
}
