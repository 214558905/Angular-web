import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { EventoModelo } from '../models/eventos.model';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  event: EventoModelo[];
  private url='http://localhost:8080/api/v1/events';
  constructor(private http: HttpClient,) {

    this.event = [];
   }

  getAllEvents(): Observable<any> {

    let direccion = this.url;
    return this.http.get<EventoModelo[]>(direccion);
  }



  deleteEventById(evento: EventoModelo){
    return this.http.delete<EventoModelo>(this.url+"/"+evento.id)
  }
  
  CrearEventos(evento: EventoModelo){

    return this.http.post(this.url, evento);
  }
   /*getAllEvents(): Observable <any>{
    return this.http.get(this.url).pipe(
      map(response => response), catchError(error => {
          alert(error.error);
          return error;
        }
      )
    );
  }*/
    
}
