import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroUsuariosPageComponent } from './registro-usuarios-page.component';

describe('RegistroUsuariosPageComponent', () => {
  let component: RegistroUsuariosPageComponent;
  let fixture: ComponentFixture<RegistroUsuariosPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroUsuariosPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroUsuariosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
