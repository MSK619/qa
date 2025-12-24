import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedTopic: 'angular' | 'js' | 'css' = 'angular';

  language = ['angular', 'js','css'];
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  
  questionsMap = {
    angular: [
      'Component-based architecture',
      'Dependency Injection',
      'Signals and RxJS'
    ],
    js: [
      'Single-threaded runtime',
      'Event loop',
      'Closures and hoisting'
    ],
    css: [
      'Flexbox and Grid',
      'Responsive layouts',
      'Specificity and cascade'
    ]
  };

  constructor(
  ) {}

  selectTopic(topic: 'angular' | 'js' | 'css'): void {
    this.selectedTopic = topic;
  
    // Close sidenav after selection
    this.sidenav.close();
  }
}
