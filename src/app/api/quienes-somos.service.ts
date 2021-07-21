import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { QuieneSomosModel } from '../models/quienesSomos.model';

@Injectable({
  providedIn: 'root'
})
export class QuienesSomosService {

  private url='http://localhost:8080/api/v1/quienesSomos';
  constructor(private http: HttpClient) { }

  getAllQuienesSomos(): Observable<any> {

    let direccion = this.url;
    return this.http.get<QuieneSomosModel[]>(direccion);
  }
}
