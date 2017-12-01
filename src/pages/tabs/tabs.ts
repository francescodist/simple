import { Component } from '@angular/core';
import { TutorialPage } from '../tutorial/tutorial';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TutorialPage;
  tab2Root = TutorialPage;
  tab3Root = TutorialPage;

  constructor() {

  }

  prova(){
    //console.log(this)
  }
}
