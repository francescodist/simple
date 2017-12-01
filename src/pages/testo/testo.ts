import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { TestoSemplificatoPage } from '../testo-semplificato/testo-semplificato';
import { HttpClient } from '@angular/common/http';
import { PopoverController } from 'ionic-angular';
import { Esempi } from './esempi';

@Component({
  selector: 'page-testo',
  templateUrl: 'testo.html'
})
export class TestoPage {

  public testo;

  constructor(public navCtrl: NavController, public http: HttpClient, public navPrm: NavParams, public popCtrl: PopoverController) {
    console.log(navPrm.data.testo);
    this.testo = navPrm.data.testo;
    console.log(this.testo);
  }



  semplifica(){
    this.http.get("http://www.math.unipa.it/simplehealth/simple/service/ita/?type=json&textaraea="+this.testo).subscribe(data => {
        console.log(this.testo);
        let result = data;
        console.log(result);
        this.navCtrl.push(TestoSemplificatoPage,{
          testo : result
        });
    });
  }

  changedText(ev) {
    try {
      this.testo = ev.target.value;
    } catch(e) {
      console.info('could not set textarea-value');
    }
  }

  mostraEsempi(event){
    let esempi = this.popCtrl.create(Esempi, this);
    esempi.present({
      ev: event
    });
  }
  prova1(){
    alert("ciao");
  }
}
