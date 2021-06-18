import { Injectable } from '@angular/core';
import { Cerveza } from 'src/app/interface/cerveza.interface';

@Injectable({
  providedIn: 'root'
})
export class CervezaService {

  public arrayCervezas: any = [];

  constructor() { 
  }

  get getCervezas() {
    return this.arrayCervezas;
  }

  set setCervezas(cerveza: Cerveza[]) {
    this.arrayCervezas = cerveza;
  }
 }
