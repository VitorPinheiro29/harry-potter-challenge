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

  onHouseChange(obj) {
    console.log(obj.value);

    this.characterService
      .charactersByHouse(obj.value)
      .subscribe((characters) => {
        this.charactersCard = characters;
      });
  }

  ngOnInit(): void {
    this.characterService
      .charactersByHouse('Gryffindor')
      .subscribe((characters) => {
        this.charactersCard = characters;
      });
  }

  navigateToCharacterDetails(actorName: String): void {
    this.router.navigate(['/characters-details', actorName]);
  }
}
