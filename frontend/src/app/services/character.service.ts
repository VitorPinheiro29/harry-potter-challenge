import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Character } from '../models/character.model';

import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpClient) {}

  baseUrl = 'http://localhost:3000/characters';

  charactersByHouse(houseName: String): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.baseUrl}?house=${houseName}`);
  }

  characterByActor(actorName: String): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.baseUrl}?actor=${actorName}`);
  }
}
