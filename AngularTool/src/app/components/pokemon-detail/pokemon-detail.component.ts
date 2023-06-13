import { Component, OnInit } from '@angular/core';

import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css'],
  standalone: true,
  imports: [MatTabsModule],
})
export class PokemonDetailComponent implements OnInit {
 

  constructor(
   
  ) { }

  ngOnInit(): void {
    
  }

  
}