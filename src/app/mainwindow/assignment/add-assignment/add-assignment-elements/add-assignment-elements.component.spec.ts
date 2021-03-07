import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddAssignmentElementsComponent } from './add-assignment-elements.component';

describe('AddAssignmentElementsComponent', () => {
  let component: AddAssignmentElementsComponent;
  let fixture: ComponentFixture<AddAssignmentElementsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAssignmentElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAssignmentElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
