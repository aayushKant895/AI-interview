import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
AppComponent(arg0: string) {
throw new Error('Method not implemented.');
}
  tabs = ['Applied', 'AI Interview', 'Shortlisted', 'Hired', 'Rejected'];
  activeTab = this.tabs[0];
  title = 'interview-app';
}

