import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CharacterService } from '../../services/character.service';
import { Character } from 'src/app/models/character.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private characterService: CharacterService,
    private router: Router
  ) {}

  charactersCard: Character[];

  //Capturing event in the select
  onHouseChange(obj) {
    console.log(obj.value);

    this.characterService
      .charactersByHouse(obj.value)
      .subscribe((characters) => {
        this.charactersCard = characters;
      });
  }

  //When to start the application
  ngOnInit(): void {
    this.characterService
      .charactersByHouse('Gryffindor')
      .subscribe((characters) => {
        this.charactersCard = characters;
      });
  }

  //Router function
  navigateToCharacterDetails(actorName: String): void {
    this.router.navigate(['/characters-details', actorName]);
  }
}
