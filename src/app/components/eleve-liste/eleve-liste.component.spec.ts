import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EleveListeComponent } from './eleve-liste.component';

describe('EleveListeComponent', () => {
  let component: EleveListeComponent;
  let fixture: ComponentFixture<EleveListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EleveListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EleveListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
