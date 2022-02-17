import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportScoreComponent } from './report-score.component';

describe('ReportScoreComponent', () => {
  let component: ReportScoreComponent;
  let fixture: ComponentFixture<ReportScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportScoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
