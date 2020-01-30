import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalPage } from '../index.paginas';
 
@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController
  ) {
  }

  activarPrincipal(){
    this.navCtrl.parent.select(2);
  }

  mostrarModal(){
    let params = {
      nombre: "Jeferson Salazar",
      edad: 21
    };
    let modal = this.modalCtrl.create(ModalPage, params);
    modal.present();
    modal.onDidDismiss( params => {
      if(params){
        console.log(params);
      }
    });
  }

}
