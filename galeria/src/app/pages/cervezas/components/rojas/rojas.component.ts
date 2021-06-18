import { Component, OnInit } from '@angular/core';
import { Cerveza } from 'src/app/interface/cerveza.interface';
import { CervezaService } from '../../services/cerveza.service';

@Component({
  selector: 'app-rojas',
  templateUrl: './rojas.component.html',
  styleUrls: ['./rojas.component.css']
})
export class RojasComponent implements OnInit {

  public cervezas: Cerveza[] = [];
  public cervezasRojas:any;

  constructor(private cervezaService: CervezaService) {

   }

  ngOnInit(): void {  
    this.cervezasRojas = this.cervezaService.getCervezas.filter((elem:Cerveza) => {
      return elem.tipo === 'Roja'
    })
  }

}
