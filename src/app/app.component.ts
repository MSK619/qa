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

  selectTopic(topic: 'angular' | 'javascript' | 'css'): void {
    this.selectedTopic = topic;
  
    // Close sidenav after selection
    this.sidenav.close();
  }
}
