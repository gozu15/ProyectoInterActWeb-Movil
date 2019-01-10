import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionMateriasPageComponent } from './asignacion-materias-page.component';

describe('AsignacionMateriasPageComponent', () => {
  let component: AsignacionMateriasPageComponent;
  let fixture: ComponentFixture<AsignacionMateriasPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignacionMateriasPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionMateriasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
