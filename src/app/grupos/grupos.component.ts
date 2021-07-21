import { Component, OnInit } from '@angular/core';
import { GruposModelo } from '../models/grupos.modelo';
import { GruposService } from '../api/grupos.service';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.scss']
})
export class GruposComponent implements OnInit {
  static END_POINT="grupos"
  public grupos: GruposModelo[];
  constructor(private gruposService: GruposService) {

    this.grupos=[];
   }

   ngOnInit(): void {
    this.synch();
  }
  synch(): void {
    this.gruposService.getAllGroupos().subscribe(data => {
      this.grupos = data;
      console.log(data)
    });

  }

}
