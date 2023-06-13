//1.-Importar HttpClient, Observable y Injectable

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root'


})

//2.-Crear la clase PokemonApiService
export class PokemonApiService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151';
  private apiJhoto = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=151';
  private apiHoenn = 'https://pokeapi.co/api/v2/pokemon?limit=135&offset=251';

//3.-Crear el constructor
  constructor(private http: HttpClient) { }

  //4.-Crear el métodos getPokemons() que devuelve un Observable<any>
  getPokemons(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/pokemon`);
  }

  getJhoto(): Observable<any> {
    return this.http.get<any>(`${this.apiJhoto}/pokemon`);
  }

  getHoenn(): Observable<any> {
    return this.http.get<any>(`${this.apiHoenn}/pokemon`);
  }


}
