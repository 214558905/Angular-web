import { Component, OnInit } from '@angular/core';
import { EventosService } from '../api/eventos.service';
import { EventoModelo } from '../models/eventos.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalGestionarEventosComponent } from '../modal-gestionar-eventos/modal-gestionar-eventos.component';


@Component({
  selector: 'app-gestionar-eventos',
  templateUrl: './gestionar-eventos.component.html',
  styleUrls: ['./gestionar-eventos.component.scss']
})
export class GestionarEventosComponent implements OnInit {

  static END_POINT="editarEventos"  
  public event: EventoModelo[];
  constructor(private eventosService: EventosService, public dialog1:MatDialog) {

    this.event = [];
  }

  ngOnInit(): void {
    this.synch();
  }
  synch(): void {
    this.eventosService.getAllEvents().subscribe(data => {
      this.event = data;
      console.log(data)
    });

  }
  Delete(event: EventoModelo){

    this.eventosService.deleteEventById(event).subscribe(data=> {

      this.event=this.event.filter(p=> p! == event);
      alert("Evento Eliminado..");
    })
  }
  see():void{
    const dialogRef=this.dialog1.open(ModalGestionarEventosComponent);
    dialogRef.componentInstance.evento;
    dialogRef.afterClosed().subscribe(result=>console.log(result));
    
  }

}
