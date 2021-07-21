import { Component, OnInit } from '@angular/core';
import { AreasModel } from '../models/areas.modelo';
import { AreasService } from '../api/areas.service';
@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.scss']
})
export class AreasComponent implements OnInit {
  static END_POINT= 'areas'
  public areas: AreasModel[];
  
  constructor(private areasService: AreasService ){

    this.areas=[];
  }

  ngOnInit(): void {
    this.synch();
  }
  synch(): void{
    this.areasService.getAllAreas().subscribe(data => {
      this.areas =data;
      console.log(data)
  });

  }

}
