import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedTopic = 'angular';

  language = ['angular', 'javascript','css'];
  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  constructor(
  ) {}

  selectTopic(topic) {
    this.selectedTopic = topic;
    this.sidenav.close();
  }

  copyText(text: string) {
    navigator.clipboard.writeText(text);
  }
}
