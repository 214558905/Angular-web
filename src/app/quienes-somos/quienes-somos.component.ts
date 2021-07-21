import { Component, OnInit } from '@angular/core';
import { QuieneSomosModel } from '../models/quienesSomos.model';
import { QuienesSomosService } from '../api/quienes-somos.service';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.scss']
})
export class QuienesSomosComponent implements OnInit {
  static END_POINT="quienesSomos"
  public quienesSomos: QuieneSomosModel[];
  constructor(private quienesSomosService: QuienesSomosService) {

    this.quienesSomos=[];
   }

   ngOnInit(): void {
    this.synch();
  }
  synch(): void {
    this.quienesSomosService.getAllQuienesSomos().subscribe(data => {
      this.quienesSomos = data;
      console.log(data)
    });

  }


}
