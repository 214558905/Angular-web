import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CongresoModel } from '../models/congreso.model';

@Injectable({
  providedIn: 'root'
})
export class CongresoService {

  congreso: CongresoModel[];
  private url='http://localhost:8080/api/v1/congreso';
  constructor(private http: HttpClient,) {

    this.congreso = [];
   }

  getAllComgresos(): Observable<any> {

    let direccion = this.url;
    return this.http.get<CongresoModel[]>(direccion);
  }

}
