import { Component, Input, OnInit } from '@angular/core';
import { EventoModelo } from '../models/eventos.model';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { EventosService } from '../api/eventos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-gestionar-eventos',
  templateUrl: './modal-gestionar-eventos.component.html',
  styleUrls: ['./modal-gestionar-eventos.component.scss']
})
export class ModalGestionarEventosComponent implements OnInit {
  public previsualizacion: string | undefined;
  public archivos: any=[]
  public name:string="";
  public description:string="";

  constructor(public dialogRef:MatDialogRef<ModalGestionarEventosComponent>, private sanitizer : DomSanitizer,
    private eventoService: EventosService, private router:Router) { 
    
  }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

  capturarFile(event: any): any {
    const archivoCapturado = event.target.files[0]
    this.extraerBase64(archivoCapturado).then((imagen: any) => {
      this.previsualizacion = imagen.base;
      console.log(imagen);

    })
    this.archivos.push(archivoCapturado)
    // 
    // console.log(event.target.files);

  }
  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };
      return

    } catch (e) {
      return null;
    }
  })

  subirArchivo(): any {
    try {
      const formularioDeDatos = new FormData();
      this.archivos.forEach((archivo: string | Blob) => {
        formularioDeDatos.append('imagen', archivo)
      })
      this.eventoService.post('http://localhost:8080/api/v1/events', formularioDeDatos)
      .subscribe(res => {

        console.log('Respuesta del servidor');
      })

    } catch (e) {
      console.log('ERROR', e);

    }
  }
  /*CrearEvento(){

    this.eventoService.CrearEventos(this.evento).subscribe((data)=>{

      this.router.navigateByUrl('editarEventos');
      alert ('Evento Guardado');
    }, (error)=>{
      alert('Error al guardar')
    
    });
  }*/
  CrearEvento(): void{

    let evento: EventoModelo={name: this.name, description: this.description };
    this.eventoService.CrearEventos(evento);
  }
}
