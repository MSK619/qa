import { Component, HostListener } from '@angular/core';
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

  searchText = '';
  selectedFaq = 'javascript';

  angular = ngqa;
  css = cssqa;
  javascript = jsqa;
  html = htmlqa;
  scenario = sc;

  faqs = [...this.javascript];
  changeFaq() {
    this.searchText = '';

    const faqMap: Record<string, any[]> = {
      angular: this.angular,
      javascript: this.javascript,
      css: this.css,
      html: this.html,
      scenario : this.scenario
    };
  
    this.faqs = faqMap[this.selectedFaq] || [];
  }

  toggle(item: any) {
    item.open = !item.open;
  }

  filteredFaqs() {
    return this.faqs.filter(f =>
      f.question.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }


  showButton = false;

  @HostListener('window:scroll', []) 
  onWindowScroll() {
    this.showButton = window.pageYOffset > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
