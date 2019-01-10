import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroEstudiantePageComponent } from './registro-estudiante-page.component';

describe('RegistroEstudiantePageComponent', () => {
  let component: RegistroEstudiantePageComponent;
  let fixture: ComponentFixture<RegistroEstudiantePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroEstudiantePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroEstudiantePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
