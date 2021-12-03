import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../template/header/header.service';

@Component({
  selector: 'app-sueka-regras',
  templateUrl: './sueka-regras.component.html',
  styleUrls: ['./sueka-regras.component.css']
})
export class SuekaRegrasComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Regras',
      icon: 'assignment',
      routeUrl: '/regras'
    }
   }

  ngOnInit(): void {
  }

  openUrl(){
    window.open("https://paste.sh/0ExX_v60#hATdNCPzbxAbmgoQMxumWRJH", "_blank");
  }

}
