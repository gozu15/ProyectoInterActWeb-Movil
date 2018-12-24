import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroAulasComponent } from './registro-aulas.component';

describe('RegistroAulasComponent', () => {
  let component: RegistroAulasComponent;
  let fixture: ComponentFixture<RegistroAulasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroAulasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroAulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
