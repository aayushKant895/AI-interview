import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterviewCandidatesComponent } from './interview-candidates/interview-candidates.component';

const routes: Routes = [
  { path: '', redirectTo: '/candidates', pathMatch: 'full' },
  { path: 'candidates', component: InterviewCandidatesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
