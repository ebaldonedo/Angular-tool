
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RickMortyChar } from '../models/Rick-Morty-char.model';


@Injectable({ providedIn: 'root'


})
export class RickMortyApiService {

//call rick and morty api here
private apiUrl = 'https://rickandmortyapi.com/api/character';



  constructor(private http:HttpClient) {}

  getRickMortyChars(): Observable<RickMortyChar[]> {
    return this.http.get<RickMortyChar[]>(`${this.apiUrl}`);

  }






}
