import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AssignmentInventoryItemsComponent } from './assignment-inventory-items.component';

describe('AssignmentInventoryItemsComponent', () => {
  let component: AssignmentInventoryItemsComponent;
  let fixture: ComponentFixture<AssignmentInventoryItemsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentInventoryItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentInventoryItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
