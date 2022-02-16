import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckapprovalComponent } from './checkapproval.component';

describe('CheckapprovalComponent', () => {
  let component: CheckapprovalComponent;
  let fixture: ComponentFixture<CheckapprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckapprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
