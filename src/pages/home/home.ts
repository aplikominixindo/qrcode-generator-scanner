import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [InAppBrowser]
})
export class HomePage {
  qrData = null;
  createdQrCode = null;
  scannedQrCode = null;

  constructor(
    public navCtrl: NavController,
    public barcodeScanner: BarcodeScanner,
    public inAppBrowser: InAppBrowser) {
  }

  // men-generate qrcode
  createQrCode(){
    this.createdQrCode = this.qrData;
  }

  // men-scan qrcode
  scanQrCode(){
    this.barcodeScanner.scan()
      .then(barcodeData => {
        this.scannedQrCode = barcodeData.text;
      }, (error) => {
        console.log('Scan error: ', error);
      });
  }

  // redirect ke detail qrcode
  goToDetailQrCode(){
    const openBrowser = this.inAppBrowser.create(
      'http://inixindosurabaya.id', // url atau scannedQrCode
      '_self',                     // target
      'location=yes'                // options
    );
    openBrowser.show();
  }

}
