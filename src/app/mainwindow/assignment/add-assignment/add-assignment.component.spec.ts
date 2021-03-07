import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddAssignmentComponent } from './add-assignment.component';

describe('AddAssignmentComponent', () => {
  let component: AddAssignmentComponent;
  let fixture: ComponentFixture<AddAssignmentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
