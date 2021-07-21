import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarEventosComponent } from './gestionar-eventos.component';

describe('GestionarEventosComponent', () => {
  let component: GestionarEventosComponent;
  let fixture: ComponentFixture<GestionarEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionarEventosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
