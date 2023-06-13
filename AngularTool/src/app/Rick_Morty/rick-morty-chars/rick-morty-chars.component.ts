import { Component } from '@angular/core';
import { RickMortyApiService } from '../../services/rick-morty-api.service.service';
import { RickMortyChar } from '../../models/Rick-Morty-char.model';



@Component({
  selector: 'app-rick-morty-chars',
  templateUrl: './rick-morty-chars.component.html',
  styleUrls: ['./rick-morty-chars.component.css']
})
export class RickMortyCharsComponent {

  constructor(private rickMortyApi: RickMortyApiService) { }

data:any = [];
characters: RickMortyChar[] = [];



  ngOnInit(): void {
    this.getChars();

  }

  getChars(): void {
    this.rickMortyApi.getRickMortyChars().subscribe(characters => {
        console.log(characters);
        this.data=characters;
        console.log(this.data.results);
        this.characters = this.data.results;
        console.log(this.characters);


    }
    );


  }

}
