import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddAssignmentComponentr } from './add-assignmentr.component';

describe('AddAssignmentComponentr', () => {
  let component: AddAssignmentComponentr;
  let fixture: ComponentFixture<AddAssignmentComponentr>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAssignmentComponentr ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAssignmentComponentr);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
