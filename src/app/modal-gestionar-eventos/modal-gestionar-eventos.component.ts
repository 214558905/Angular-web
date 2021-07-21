import { Component, Input, OnInit } from '@angular/core';
import { EventoModelo } from '../models/eventos.model';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-gestionar-eventos',
  templateUrl: './modal-gestionar-eventos.component.html',
  styleUrls: ['./modal-gestionar-eventos.component.scss']
})
export class ModalGestionarEventosComponent implements OnInit {

  evento: EventoModelo = {};

  constructor(public dialogRef:MatDialogRef<ModalGestionarEventosComponent>) { 
    
  }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

}
