import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaquetesEscolaresComponent } from './paquetes-escolares.component';

describe('PaquetesEscolaresComponent', () => {
  let component: PaquetesEscolaresComponent;
  let fixture: ComponentFixture<PaquetesEscolaresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaquetesEscolaresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaquetesEscolaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
