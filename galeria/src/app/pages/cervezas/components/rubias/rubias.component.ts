import { Component, OnInit } from '@angular/core';
import { Cerveza } from 'src/app/interface/cerveza.interface';
import { CervezaService } from '../../services/cerveza.service';


@Component({
  selector: 'app-rubias',
  templateUrl: './rubias.component.html',
  styleUrls: ['./rubias.component.css']
})
export class RubiasComponent implements OnInit {

  public cervezas: Cerveza[] = [];
  public cervezasRubias:any;

  constructor(private cervezaService: CervezaService) {

   }

  ngOnInit(): void {  
    this.cervezasRubias = this.cervezaService.getCervezas.filter((elem:Cerveza) => {
      return elem.tipo === 'Rubia'
    })
  }


}
