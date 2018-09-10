import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompButtonComponent } from './comp-button.component';

describe('CompButtonComponent', () => {
  let component: CompButtonComponent;
  let fixture: ComponentFixture<CompButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
