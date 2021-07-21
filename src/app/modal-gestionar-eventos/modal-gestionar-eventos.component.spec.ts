import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalGestionarEventosComponent } from './modal-gestionar-eventos.component';

describe('ModalGestionarEventosComponent', () => {
  let component: ModalGestionarEventosComponent;
  let fixture: ComponentFixture<ModalGestionarEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalGestionarEventosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalGestionarEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
