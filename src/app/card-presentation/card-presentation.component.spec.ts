import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPresentationComponent } from './card-presentation.component';

describe('CardPresentationComponent', () => {
  let component: CardPresentationComponent;
  let fixture: ComponentFixture<CardPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
