import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddAssignmentElementsComponentr } from './add-assignmentr-elements.component';

describe('AddAssignmentElementsComponent', () => {
  let component: AddAssignmentElementsComponentr;
  let fixture: ComponentFixture<AddAssignmentElementsComponentr>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAssignmentElementsComponentr ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAssignmentElementsComponentr);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
