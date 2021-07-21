import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { NoticiaModelo } from '../models/noticias.model';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  private url='http://localhost:8080/api/v1/news';
  constructor(private http: HttpClient) {

   }

  getAllNews(): Observable<any> {

    let direccion = this.url;
    return this.http.get<NoticiaModelo[]>(direccion);
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
