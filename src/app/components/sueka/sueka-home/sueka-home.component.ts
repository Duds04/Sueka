import { SuekaDialogAmarelouComponent } from './../sueka-dialog-amarelou/sueka-dialog-amarelou.component';
import { HeaderService } from './../../template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { AnyService } from '../../../services/any.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-sueka-home',
  templateUrl: './sueka-home.component.html',
  styleUrls: ['./sueka-home.component.css']
})
export class SuekaHomeComponent implements OnInit {
  cartas!:number
  src!:string
  subtitle!:string

  constructor(private anyService: AnyService, private headerService: HeaderService, private dialog: MatDialog) {
    headerService.headerData = {
    title: 'Sueka',
    icon: 'videogame_asset',
    routeUrl: '/sueka'
  }}

  ngOnInit(): void {
    this.subtitle = 'Uma tentativa de desenvolver o jogo Sueka em versão web'
  }

  sortearCarta(){
    this.cartas = this.anyService.sorteador()
    // this.src = `../../../../assets/img/cartas/carta${this.cartas}.png`
    this.src = `../../../../assets/img/cartas/carta3.gif`
  }

  openDialog () {
    this.dialog.open(SuekaDialogAmarelouComponent, {
      width: '400px',
    });
 }

}
