import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersComponent } from './characters.component';
import { RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CharactersComponent', () => {
  let component: CharactersComponent;
  let fixture: ComponentFixture<CharactersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), HttpClientTestingModule],
      declarations: [CharactersComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
