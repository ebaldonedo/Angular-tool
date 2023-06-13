import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151';
  private apiJhoto = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=151';
  private apiHoenn = 'https://pokeapi.co/api/v2/pokemon?limit=135&offset=251';
  

  constructor(private http: HttpClient) { }

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
