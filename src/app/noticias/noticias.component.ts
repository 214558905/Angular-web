import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../api/noticias.service';
import { NoticiaModelo } from '../models/noticias.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalNoticiaComponent } from '../modal-noticia/modal-noticia.component';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  static END_POINT= 'home'
  public noticia: NoticiaModelo[];
  
  constructor(private noticiaservice: NoticiasService, public dialog:MatDialog){

    this.noticia=[];
  }

  ngOnInit(): void {
    this.synch();
  }
  synch(): void{
    this.noticiaservice.getAllNews().subscribe(data => {
      this.noticia =data;
      console.log(data)
    });

  }
  seeNoticia(evento:NoticiaModelo):void{
    const dialogRef=this.dialog.open(ModalNoticiaComponent);
    dialogRef.componentInstance.noticia=evento;
    dialogRef.afterClosed().subscribe(result=>console.log(result));
    
  }


}
