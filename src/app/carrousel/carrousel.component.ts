import { Component, OnInit } from '@angular/core';
import { CarrrouselService } from '../api/carrrousel.service';
import { CarrouselModel } from '../models/carrousel.modelo';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})
export class CarrouselComponent implements OnInit {

  static END_POINT= 'home'
  public carrousel: CarrouselModel[];
  
  constructor(private carrouselService: CarrrouselService ){

    this.carrousel=[];
  }

  ngOnInit(): void {
    this.synch();
  }
  synch(): void{
    this.carrouselService.getAllCarrousel().subscribe(data => {
      this.carrousel =data;
      console.log(data)
  });

  }


}
