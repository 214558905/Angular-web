import { Component, Input, OnInit } from '@angular/core';
import { EventoModelo } from '../models/eventos.model';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  evento: EventoModelo = {};

  constructor(public dialogRef:MatDialogRef<ModalComponent>) { 
    
  }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }
  
 

}