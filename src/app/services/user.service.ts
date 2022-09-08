import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UserService {
loginAllData:any;
  constructor(public loadingController: LoadingController,) { }

  
  isLoading = false;
           
  async present( msg:any ) {
    this.isLoading = true;
    return await this.loadingController.create({
     message: msg,
     mode:'ios'
    }).then(a => {
      a.present().then(() => {
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }          
  async dismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }

}
