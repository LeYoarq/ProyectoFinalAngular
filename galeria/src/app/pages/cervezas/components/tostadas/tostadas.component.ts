import { Component, OnInit } from '@angular/core';
import { Cerveza } from 'src/app/interface/cerveza.interface';
import { CervezaService } from '../../services/cerveza.service';

@Component({
  selector: 'app-tostadas',
  templateUrl: './tostadas.component.html',
  styleUrls: ['./tostadas.component.css']
})
export class TostadasComponent implements OnInit {

  public cervezas: Cerveza[] = [];
  public cervezasTostadas:any;

  constructor(private cervezaService: CervezaService) {

   }

  ngOnInit(): void {  
    this.cervezasTostadas = this.cervezaService.getCervezas.filter((elem:Cerveza) => {
      return elem.tipo === 'Tostada'
    })
  }

}
