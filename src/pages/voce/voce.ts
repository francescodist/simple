import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { TestoPage } from '../testo/testo'

@Component({
  selector: 'page-voce',
  templateUrl: 'voce.html'
})
export class VocePage {

  constructor(public navCtrl: NavController, public spcRcn: SpeechRecognition) {

    this.spcRcn.isRecognitionAvailable()
                  .then(() =>
                    this.spcRcn.requestPermission()
                      .then(
                        () => console.log('Granted'),
                        () => console.log('Denied')
                    ));
  }

  startVoce(){
    this.spcRcn.startListening()
                  .subscribe(
                    (matches: Array<string>) => this.navCtrl.push(TestoPage,{
                      testo : matches[0]
                    }),
                    (onerror) => console.log('error:', onerror)
                  )
  }




}
