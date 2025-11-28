import { Component } from '@angular/core';
import { cssqa } from './constant/css.constant';
import { htmlqa } from './constant/html.constant';
import { jsqa } from './constant/js.constant';
import { ngqa } from './constant/ng.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  searchText = '';
  selectedFaq = 'angular';

  angular = ngqa;
  css = cssqa;
  javascript = jsqa;
  html = htmlqa;

  faqs = [...this.angular];
  changeFaq() {
    this.searchText = '';
    
    const faqMap: Record<string, any[]> = {
      angular: this.angular,
      javascript: this.javascript,
      css: this.css,
      html: this.html
    };
  
    this.faqs = faqMap[this.selectedFaq] || [];
  }

  toggle(item: any) {
    item.open = !item.open;
  }

  filteredFaqs() {
    return this.faqs.filter(f =>
      f.question.toLowerCase().includes(this.searchText.toLowerCase()) ||
      f.answer.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
