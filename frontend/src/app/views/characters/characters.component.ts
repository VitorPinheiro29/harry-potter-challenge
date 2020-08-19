import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CharacterService } from '../../services/character.service';
import { Character } from 'src/app/models/character.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  constructor(
    private router: ActivatedRoute,
    private characterService: CharacterService
  ) {}

  characterDetail: Character;

  ngOnInit(): void {
    let actorName = this.router.snapshot.params['actorName'];
    this.characterService
      .characterByActor(actorName)
      .subscribe((characters) => {
        if (characters.length > 0) {
          this.characterDetail = characters[0];
        }
      });
  }
}
