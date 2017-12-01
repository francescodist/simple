import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-testo-semplificato',
  templateUrl: 'testo-semplificato.html'
})

export class TestoSemplificatoPage {

  public testoSimple
  public originale = [];
  public simple = [];
  public def = [];
  constructor(public navCtrl: NavController, public navPrm: NavParams) {
    let param = navPrm.data.testo;
    //aggiungo al testo con semplificazione e/o definizione
    //l'attributo evidenziata da usare come classe HTML per gli stili
    for (let c of param){
      for(let t of c.contenuto){
        if(t.semplificazione || t.definizione){
          t.evidenziata = true;
        }
      }
    }
    this.testoSimple = param;

  }

  hideTip(i, testo){
    console.log("1");
    this.def[i] = false;
    testo.tip = false;
  }

  showTip(i, testo){
    console.log("2");
    this.def[i] = true;
    testo.tip = true;
  }

  hideSimple(i){
    console.log("3");
    this.simple[i] = false;
    this.originale[i] = true;
  }

  showSimple(i){
    console.log("4");
    this.simple[i] = true;
    this.originale[i] = false;
  }


}
