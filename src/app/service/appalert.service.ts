import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AppalertService {

  constructor(public alertCtrl: AlertController) { }

  async presentAlert(msg) {
    const alert = await this.alertCtrl.create({
      message: msg,
      buttons: ['ok']
    });
    alert.present();
  }
}
