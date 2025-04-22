import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateTabsComponent } from './candidate-tabs.component';

describe('CandidateTabsComponent', () => {
  let component: CandidateTabsComponent;
  let fixture: ComponentFixture<CandidateTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidateTabsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CandidateTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
