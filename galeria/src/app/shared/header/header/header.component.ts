import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public cambiado: boolean;

  constructor() {
    this.cambiado = false;
   }

  ngOnInit(): void {
  }

  cambiarModo() {
    this.cambiado = !this.cambiado
    if(this.cambiado) {
      document.body.style.fontSize = '35px';
      document.body.style.background = 'black';
    } else {
      document.body.style.fontSize = ''
      document.body.style.background = '';
    }
    
  }

}
