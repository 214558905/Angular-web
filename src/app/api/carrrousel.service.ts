import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CarrouselModel } from '../models/carrousel.modelo';

@Injectable({
  providedIn: 'root'
})
export class CarrrouselService {

  private url='http://localhost:8080/api/v1/carrousel';
  constructor(private http: HttpClient) {

   }

  getAllCarrousel(): Observable<any> {

    let direccion = this.url;
    return this.http.get<CarrouselModel[]>(direccion);
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
