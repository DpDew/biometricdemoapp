import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { AppalertService } from '../service/appalert.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public faio: FingerprintAIO,
    public appAlert: AppalertService

  ) {
    this.faio.isAvailable().then(result => {
      if ( result === 'finger' || result === 'face' ) {
        // Fingerprint or Face Auth is available
        console.log('Fingerprint or Face Exist!');
        this.faio.show({
          // clientId: 'BiometricDemo',
          // clientSecret: 'o7aoOMYUbyxaD23oFAnJ', // Only necessary for Android
          disableBackup: true, // Only for Android(optional)
      }).then((res: any) => {
        if (res === 'Success') {
          // Fingerprint/Face was successfully verified
          // Go to dashboard
          this.navCtrl.navigateRoot('');
          console.log('Home');

        } else {
          // Fingerprint/Face was not successfully verified
            this.appAlert.presentAlert(result);
            console.log(result);
          }
      }).catch((error: any) => {
        this.appAlert.presentAlert(error);
        console.log(error);
      });
      } else {
        this.appAlert.presentAlert('Fingerprint/Face Auth is not available on this device!');
      }
    });
  }

}
