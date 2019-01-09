import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorPageComponent } from './contenedor-page.component';

describe('ContenedorPageComponent', () => {
  let component: ContenedorPageComponent;
  let fixture: ComponentFixture<ContenedorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenedorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
