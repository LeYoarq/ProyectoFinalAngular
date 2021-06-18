import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Cerveza } from '../interface/cerveza.interface';
import { XmlService } from '../services/xml.service';
import { CervezaService } from './cervezas/services/cerveza.service';


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  arrayCervezas: Cerveza[] = [];
  

  constructor(
              private xmlService: XmlService, 
              private cervezaService: CervezaService) { 
  }

  ngOnInit(): void {
    this.getData()
    this.cervezaService.setCervezas = this.arrayCervezas;

  }

  getData = async() => {
    await this.xmlService.getXml().then(xmlCerveza =>  {
        let x = xmlCerveza.getElementsByTagName("elemento");
        for (let i = 0; i < x.length; i++) {
          this.arrayCervezas.push({
            nombre : x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue,
            foto: x[i].getElementsByTagName("foto")[0].childNodes[0].nodeValue,
            pie: x[i].getElementsByTagName("pie")[0].childNodes[0].nodeValue,
            detalle: x[i].getElementsByTagName("detalle")[0].childNodes[0].nodeValue,
            tipo: x[i].getElementsByTagName("tipo")[0].childNodes[0].nodeValue,
          })

      }
      
      })
  }

}
