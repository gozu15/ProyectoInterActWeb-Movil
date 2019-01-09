import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDocentePageComponent } from './registro-docente-page.component';

describe('RegistroDocentePageComponent', () => {
  let component: RegistroDocentePageComponent;
  let fixture: ComponentFixture<RegistroDocentePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroDocentePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroDocentePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
