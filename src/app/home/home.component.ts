import { Component, OnInit } from '@angular/core';
import { EventoModelo } from '../models/eventos.model';
import { EventosService } from '../api/eventos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  static END_POINT= 'home'

  constructor( ) {
   }

  ngOnInit(): void {
  }

  synch():void{

  }
}
