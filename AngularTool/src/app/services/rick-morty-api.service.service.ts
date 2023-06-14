
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { responseRickMortyApi } from '../models/Rick-Morty-char.model';


@Injectable({ providedIn: 'root'


})
export class RickMortyApiService {

//call rick and morty api here
private apiUrl = 'https://rickandmortyapi.com/api/character';



  constructor(private http:HttpClient) {}

  getRickMortyChars(): Observable<responseRickMortyApi> {
    return this.http.get<responseRickMortyApi>(`${this.apiUrl}`);

  }






}
