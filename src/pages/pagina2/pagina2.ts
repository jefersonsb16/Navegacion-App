import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pagina3Page } from '../index.paginas';

@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  pagina3:any = Pagina3Page;

  mutantes:any[] = [
    {
      nombre: "Magneto",
      poder: "Atraer metales"
    },
    {
      nombre: "Wolverine",
      poder: "Garras de acero, regeneración"
    },
    {
      nombre: "Profesor X",
      poder: "Controlar mentes"
    },
    {
      nombre: "Scoot",
      poder: "Lanza rayos"
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navegarPagina3(mutante:any){
    console.log(mutante);
    this.navCtrl.push(Pagina3Page, {'mutante' : mutante});
  }

}
