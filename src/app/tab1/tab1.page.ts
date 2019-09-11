import { Component } from '@angular/core';
import { TranslationService } from '../api/translation.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  input:String = ''
  output: String = ''

  constructor(private api: TranslationService) {
    // testing
    // this.input = 'K prekladu...';
  }

  public btnTranslateClicked():void{
    // console.log(this.input);

    // call a translation API
    if(this.input.length >= 2){
      this.api.getTranslation(this.input).subscribe( (data) => {
        console.log(data);
        this.output = data['responseData']['translatedText'];
      });
    }
    
  }

}
