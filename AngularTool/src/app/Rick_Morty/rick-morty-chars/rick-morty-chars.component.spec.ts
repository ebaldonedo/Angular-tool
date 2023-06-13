import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickMortyCharsComponent } from './rick-morty-chars.component';

describe('RickMortyCharsComponent', () => {
  let component: RickMortyCharsComponent;
  let fixture: ComponentFixture<RickMortyCharsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RickMortyCharsComponent]
    });
    fixture = TestBed.createComponent(RickMortyCharsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
