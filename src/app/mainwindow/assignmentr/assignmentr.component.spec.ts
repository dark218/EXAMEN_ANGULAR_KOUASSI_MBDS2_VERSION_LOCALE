import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AssignmentComponentr } from './assignmentr.component';

describe('AssignmentComponent', () => {
  let component: AssignmentComponentr;
  let fixture: ComponentFixture<AssignmentComponentr>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentComponentr ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentComponentr);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
