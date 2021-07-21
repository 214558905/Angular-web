import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GruposModelo } from '../models/grupos.modelo';

@Injectable({
  providedIn: 'root'
})
export class GruposService {

  private url='http://localhost:8080/api/v1/grupos';
  constructor(private http: HttpClient) { }

  getAllGroupos(): Observable<any> {

    let direccion = this.url;
    return this.http.get<GruposModelo[]>(direccion);
  }

}
