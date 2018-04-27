import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  qrData = null;
  createdQrCode = null;
  scannedQrCode = null;

  constructor(
    public navCtrl: NavController,
    public barcodeScanner: BarcodeScanner) {

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

}
