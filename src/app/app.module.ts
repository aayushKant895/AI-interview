import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // ✅ Required for *ngIf, *ngFor

import { AppComponent } from './app.component';
import { CandidateTabsComponent } from './candidate-tabs/candidate-tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidateTabsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule // ✅ Add this if it's not already there
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

