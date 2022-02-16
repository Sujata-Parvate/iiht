import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheeboxuiComponent } from './wheeboxui.component';

describe('WheeboxuiComponent', () => {
  let component: WheeboxuiComponent;
  let fixture: ComponentFixture<WheeboxuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WheeboxuiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WheeboxuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
