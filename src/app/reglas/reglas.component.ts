import { Component, OnInit } from '@angular/core';
import { ReglasModel } from '../models/reglas.modelo';
import { ReglasService } from '../api/reglas.service';

@Component({
  selector: 'app-reglas',
  templateUrl: './reglas.component.html',
  styleUrls: ['./reglas.component.scss']
})
export class ReglasComponent implements OnInit {
  static END_POINT="reglamentos-normas"
  public reglas: ReglasModel[];
  constructor(private reglasService: ReglasService) {

    this.reglas=[];
   }

   ngOnInit(): void {
    this.synch();
  }
  synch(): void {
    this.reglasService.getAllReglas().subscribe(data => {
      this.reglas = data;
      console.log(data)
    });

  }

}
