import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AssignmentInventoryComponent } from './assignment-inventory.component';

describe('AssignmentInventoryWindowComponent', () => {
  let component: AssignmentInventoryComponent;
  let fixture: ComponentFixture<AssignmentInventoryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
