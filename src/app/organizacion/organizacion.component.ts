import { Component, OnInit } from '@angular/core';
import { OrganizacionService } from '../api/organizacion.service';
import { OrginacionModel } from '../models/organizacion.modelo';

@Component({
  selector: 'app-organizacion',
  templateUrl: './organizacion.component.html',
  styleUrls: ['./organizacion.component.scss']
})
export class OrganizacionComponent implements OnInit {

  static END_POINT= 'organizacion'
  public organizacion: OrginacionModel[];
  
  constructor(private organizacionService: OrganizacionService){

    this.organizacion=[];
  }

  ngOnInit(): void {
    this.synch();
  }
  synch(): void{
    this.organizacionService.getAllOrganizacion().subscribe(data => {
      this.organizacion =data;
      console.log(data)
    });

  }

}
