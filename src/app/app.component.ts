import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  searchText = '';
  selectedFaq = 'faq1';

  faq1 = [
    { question: 'What is your return policy?', answer: 'You can return any unused item within 30 days.', open: false },
    { question: 'Do you offer customer support?', answer: 'Yes, 24/7 support is available.', open: false },
  ];

  faq2 = [
    { question: 'Where do you ship?', answer: 'We ship worldwide.', open: false },
    { question: 'Can I cancel my order?', answer: 'Yes, cancel within 12 hours.', open: false },
  ];

  faqs = [...this.faq1]; // default

  changeFaq() {
    this.searchText = ''; // reset search
    this.faqs = this.selectedFaq === 'faq1' ? [...this.faq1] : [...this.faq2];
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
