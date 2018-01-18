import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sucursal2Component } from './sucursal-2.component';

describe('Sucursal2Component', () => {
  let component: Sucursal2Component;
  let fixture: ComponentFixture<Sucursal2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sucursal2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sucursal2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
