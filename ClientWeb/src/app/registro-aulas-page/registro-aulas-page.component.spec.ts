import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroAulasPageComponent } from './registro-aulas-page.component';

describe('RegistroAulasPageComponent', () => {
  let component: RegistroAulasPageComponent;
  let fixture: ComponentFixture<RegistroAulasPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroAulasPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroAulasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
