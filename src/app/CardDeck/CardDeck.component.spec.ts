/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardDeckComponent } from './CardDeck.component';

describe('CardDeckComponent', () => {
  let component: CardDeckComponent;
  let fixture: ComponentFixture<CardDeckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardDeckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
