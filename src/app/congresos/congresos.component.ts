import { Component, OnInit } from '@angular/core';
import { CongresoService } from '../api/congreso.service';
import { CongresoModel } from '../models/congreso.model';

@Component({
  selector: 'app-congresos',
  templateUrl: './congresos.component.html',
  styleUrls: ['./congresos.component.scss']
})
export class CongresosComponent implements OnInit {

  static END_POINT = 'congresos'
  public congreso: CongresoModel[];

  constructor(private congresoService: CongresoService) {

    this.congreso = [];
  }

  ngOnInit(): void {
    this.synch();
  }
  synch(): void {
    this.congresoService.getAllComgresos().subscribe(data => {
      this.congreso = data;
      console.log(data)
    });
  }

}
