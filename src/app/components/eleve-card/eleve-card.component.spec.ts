import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EleveCardComponent } from './eleve-card.component';

describe('EleveCardComponent', () => {
  let component: EleveCardComponent;
  let fixture: ComponentFixture<EleveCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EleveCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EleveCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
