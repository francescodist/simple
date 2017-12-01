import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TestoPage } from '../testo/testo';
import { VocePage } from '../voce/voce';
import { ImmaginePage } from '../immagine/immagine';

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {

  constructor(public navCtrl: NavController) {
    this.esempio ="Esempio";
  }
  public titolo;
  public esempio;
  public showTip = false;
  public parte1 = true;
  public parte2 = false;
  public parte3 = false;
  public parte4 = false;
  public showNext = false;
  public selectedTabs
  public tabID;
  public introduzione = "";
  public tipClass;

  ionViewDidEnter() {

      this.navCtrl.parent.ionChange.subscribe(() => {
        this.tabID = this.navCtrl.parent.getSelected().id;
        switch(this.tabID){
          case "t0-0": {
            this.introduzione='In questa sezione è possibile inserire del testo da tastiera o incollarlo da una fonte già esistente. Il testo verrà "semplificato" per una migliore lettura e comprensione.';
            this.titolo = "Testo";
            break;
          }
          case "t0-1": {
            this.introduzione='In questa sezione è possibile dettare del testo usando il riconoscimento vocale. Il testo verrà "semplificato" per una migliore lettura e comprensione.';
            this.titolo = "Voce"
            break;
          }
          case "t0-2": {
            this.introduzione="In questa sezione è possibile ricavare testo da un'immagine contenente testo stampato da semplificare. La qualità del testo ottenuto varia di molto con la qualità dell'immagine utilizzata (si consiglia di utilizzare questa funzione con scannerizzazioni di testo stampato per un risultato ottimale)";
            this.titolo = "Immagine";
            break;
          }
        }

        console.log(this.tabID);
      });
      //console.log(this.selectedTabs);
      //this.tabID = this.selectedTabs[this.selectedTabs.length - 1]
      //console.log(this.tabID);

  }




  pressed(e){
    if(this.parte1){
      console.log(e);
      this.showTip = true;
      this.tipClass = "tip";
    }
  }

  tapped(e){
    if(this.showTip){
      this.showTip = false;
      this.parte1 = false;
      this.parte2 = true;
      this.tipClass="";
    }
  }

  dragRight(e){
    if(this.parte2){
      this.parte2 = false;
      this.parte3 = true;
      this.esempio = "Parola Semplificata";
    }
  }

  dragLeft(e){
    if(this.parte3){
      this.parte3 = false;
      this.parte4 = true;
      this.showNext = true;
      this.esempio = "Esempio";
    }
  }

  goToSimple(){

    if(this.tabID == "t0-0"){
      this.navCtrl.push(TestoPage,{
        testo: ""
      });
    }
    if(this.tabID === "t0-1"){
      this.navCtrl.push(VocePage);
    }
    if(this.tabID === "t0-2"){
      this.navCtrl.push(ImmaginePage);
    }
  }

}
