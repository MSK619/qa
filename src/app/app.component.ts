import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { cssqa } from './constant/css.constant';
import { htmlqa } from './constant/html.constant';
import { jsqa } from './constant/js.constant';
import { ngqa } from './constant/ng.constant';
import { sc } from './constant/scenario.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedTopic = 'angular';

  language = ['angular', 'javascript','css','html','scenario'];
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  questionList:any;
  expandedIndex: number | null = null;


  constructor(
  ) {}

  ngOnInit(){
    this.questionList = ngqa;
  }

  onSelectNavItem(topic) {
    this.selectedTopic = topic;

    switch(this.selectedTopic){
      case 'angular':
       this.questionList = ngqa;
      break;
      case 'javascript':
        this.questionList = jsqa;
      break;
      case 'css':
        this.questionList = cssqa;
      break;
      case 'html':
          this.questionList = htmlqa;
          break;
      case 'scenario':
            this.questionList = sc;
      break;
      default:
        this.questionList = ngqa;
      }

    this.sidenav.close();
  }

  copyText(text: string) {
    navigator.clipboard.writeText(text);
  }

  toggle(index: number): void {
    this.questionList[index].open = !this.questionList[index].open;
    // this.questionList.forEach((item, i) => {
    //   item.open = i === index ? !item.open : false;
    // });
  }

  onClickSetting(){
    alert('Please Check Question! Why you want to check setting.')
  }
}
