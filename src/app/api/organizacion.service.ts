import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { OrginacionModel } from '../models/organizacion.modelo';

@Injectable({
  providedIn: 'root'
})
export class OrganizacionService {

  private url='http://localhost:8080/api/v1/organizacion';
  constructor(private http: HttpClient) { }

  getAllOrganizacion(): Observable<any> {

    let direccion = this.url;
    return this.http.get<OrginacionModel[]>(direccion);
  }
}
