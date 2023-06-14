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


characters: RickMortyChar[] = [];



  ngOnInit(): void {
    this.getChars();

  }

  getChars(): void {
                                                      //implicit destructuring
    this.rickMortyApi.getRickMortyChars().subscribe( ( { results } ) => {
        this.characters = results;
    }
    );


  }

}
