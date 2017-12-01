import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { VocePage } from '../pages/voce/voce';
import { ImmaginePage } from '../pages/immagine/immagine';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { TabsPage } from '../pages/tabs/tabs';
import { TestoPage } from '../pages/testo/testo';
import { TestoSemplificatoPage } from '../pages/testo-semplificato/testo-semplificato';
import { Esempi } from '../pages/testo/esempi';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { Camera } from '@ionic-native/camera';
import { LoadingController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';

@NgModule({
  declarations: [
    MyApp,
    VocePage,
    ImmaginePage,
    TutorialPage,
    TabsPage,
    TestoPage,
    TestoSemplificatoPage,
    Esempi
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    VocePage,
    ImmaginePage,
    TutorialPage,
    TabsPage,
    TestoPage,
    TestoSemplificatoPage,
    Esempi
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClientModule,
    SpeechRecognition,
    Camera,
    LoadingController,
    PopoverController,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
