import { Component, OnInit } from '@angular/core';
import { AnyService } from '../../../services/any.service';

@Component({
  selector: 'app-sueka-home',
  templateUrl: './sueka-home.component.html',
  styleUrls: ['./sueka-home.component.css']
})
export class SuekaHomeComponent implements OnInit {
  cartas!:number
  src!:string
  subtitle!:string

  constructor(private anyService: AnyService) { }

  ngOnInit(): void {
    this.subtitle = 'Uma tentativa de desenvolver o jogo Sueka em versão web'
  }

  sortearCarta(){
    this.cartas = this.anyService.sorteador()
    this.src = `../../../../assets/img/cartas/carta${this.cartas}.png`
  }

}
