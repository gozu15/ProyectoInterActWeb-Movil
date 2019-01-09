import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroMateriasPageComponent } from './registro-materias-page.component';

describe('RegistroMateriasPageComponent', () => {
  let component: RegistroMateriasPageComponent;
  let fixture: ComponentFixture<RegistroMateriasPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroMateriasPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroMateriasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
