import { Component } from '@angular/core';

@Component({
  selector: 'app-candidate-tabs',
  templateUrl: './candidate-tabs.component.html',
  styleUrls: ['./candidate-tabs.component.css']
})
export class CandidateTabsComponent {
  tabs: string[] = ['Applied', 'AI Interview', 'Shortlisted', 'Hired', 'Rejected'];
  selectedTabIndex = 0;

  selectTab(index: number): void {
    this.selectedTabIndex = index;
  }
}
