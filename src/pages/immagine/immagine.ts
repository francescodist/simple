import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TestoPage } from '../testo/testo';

@Component({
  selector: 'page-immagine',
  templateUrl: 'immagine.html'
})
export class ImmaginePage {
  public APIKEY = "8b193efa4888957";
  public OCRText = "";
  constructor(public navCtrl: NavController, private camera: Camera, public http: HttpClient, public loadCtrl: LoadingController) {

  }

  scegliImmagine(){
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit: true
    }
    this.camera.getPicture(options).then((imageData) => {

      let loading = this.loadCtrl.create({
        content: 'Analizzo Immagine...'
      });

     let base64Image = 'data:image/jpeg;base64,' + imageData;
     let data = encodeURIComponent("base64Image")+"="+encodeURIComponent(base64Image);

     loading.present();
     this.http.post("https://api.ocr.space/parse/image",data,{
       headers: new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
                                 .set('apikey',this.APIKEY),
     })
                .subscribe((res : any)=> {
                  let result = res;
                  this.OCRText = result.ParsedResults[0].ParsedText;
                  console.log(this.OCRText);
                  //result = JSON.parse(res);
                  loading.dismiss();
                  this.navCtrl.push(TestoPage,{
                    testo: this.OCRText
                  })

                })
    }, (err) => {
     // Handle error
    });
  }

  scattaFoto(){
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA,
      allowEdit: true
    }
    this.camera.getPicture(options).then((imageData) => {

      let loading = this.loadCtrl.create({
        content: 'Analizzo Immagine...'
      });

      let base64Image = 'data:image/jpeg;base64,' + imageData;
      let data = encodeURIComponent("base64Image")+"="+encodeURIComponent(base64Image);
      loading.present();
      this.http.post("https://api.ocr.space/parse/image",data,{
        headers: new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
                                  .set('apikey',this.APIKEY),
      })
                 .subscribe((res : any)=> {
                   let result = res;
                   this.OCRText = result.ParsedResults[0].ParsedText;
                   console.log(this.OCRText);
                   //result = JSON.parse(res);
                   loading.dismiss();
                   this.navCtrl.push(TestoPage,{
                     testo: this.OCRText
                   })

                 })
    }, (err) => {
     // Handle error
    });
  }
}
