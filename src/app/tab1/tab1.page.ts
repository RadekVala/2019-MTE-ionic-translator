import { Component } from '@angular/core';
import { TranslationService } from '../api/translation.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  input:String = ''
  output: String = ''
  loadingDialog: any

  constructor(private api: TranslationService, public loadingController: LoadingController) {
    // testing
    // this.input = 'K prekladu...';
  }

  public btnTranslateClicked():void{
    // console.log(this.input);

    // call a translation API
    if(this.input.length >= 2){

      // show the loading dialog
      this.presentLoading();

      this.api.getTranslation(this.input).subscribe( (data) => {
        console.log(data);
        this.output = data['responseData']['translatedText'];
        // hide the loading dialog
        this.loadingDialog.dismiss();
      });
    }
    
  }

  async presentLoading() {
    this.loadingDialog = await this.loadingController.create({
      message: 'Translating...',
    });
    await this.loadingDialog.present();
  }

}
