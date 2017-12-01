import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  templateUrl: 'esempi.html'
})

export class Esempi {
  public constructor(public viewCtrl: ViewController, public http: HttpClient){

  }
  scegliEsempio(ref){
    this.http.get("http://www.math.unipa.it/simplehealth/ita/simple/reports.php?ref="+ref, {
      responseType: "text"
    })
    .subscribe(
      testo => {
        this.viewCtrl.data.testo = testo;
        this.viewCtrl.dismiss();
      },
      (error) =>{
        alert("Impossibile raggiungere il server! Riprovare più tardi!");
        console.log(error);
        this.viewCtrl.dismiss();
      })
  }
}
