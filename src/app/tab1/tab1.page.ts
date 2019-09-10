import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  input:String

  constructor() {
    // testing
    // this.input = 'K prekladu...';
  }

  public btnTranslateClicked():void{
    // console.log(this.input);

    // TODO: call a translation API
  }

}
