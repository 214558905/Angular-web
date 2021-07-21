import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AreasModel } from '../models/areas.modelo';

@Injectable({
  providedIn: 'root'
})
export class AreasService {

  private url='http://localhost:8080/api/v1/areas';
  constructor(private http: HttpClient) {

   }

  getAllAreas(): Observable<any> {

    let direccion = this.url;
    return this.http.get<AreasModel[]>(direccion);
  }

}
