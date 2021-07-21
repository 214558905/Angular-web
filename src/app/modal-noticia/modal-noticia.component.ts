import { Component,OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoticiaModelo } from '../models/noticias.model';

@Component({
  selector: 'app-modal-noticia',
  templateUrl: './modal-noticia.component.html',
  styleUrls: ['./modal-noticia.component.scss']
})
export class ModalNoticiaComponent implements OnInit {

  noticia: NoticiaModelo={};
  constructor(public dialogRef:MatDialogRef<ModalNoticiaComponent>) { }

  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close();
  }


}
