import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  home='/home'
  grupos='/grupos'
  areas='/areas'
  quienesSomos='/quienesSomos'
  organizacion='/organizacion'
  congresos='/congresos'
  constructor() { }

  ngOnInit(): void {
  }

}
