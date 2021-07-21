import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ReglasModel } from '../models/reglas.modelo';

@Injectable({
  providedIn: 'root'
})
export class ReglasService {

  private url='http://localhost:8080/api/v1/reglas';
  constructor(private http: HttpClient) { }

  getAllReglas(): Observable<any> {

    let direccion = this.url;
    return this.http.get<ReglasModel[]>(direccion);
  }
}
