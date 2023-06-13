import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RickMortyCharsComponent } from './rick-morty-chars/rick-morty-chars.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    RickMortyCharsComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class RickMortyModuleModule { }
