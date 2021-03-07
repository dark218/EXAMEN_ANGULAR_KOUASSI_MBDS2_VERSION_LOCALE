import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AssignmentrInventoryItemsComponent } from './assignmentr-inventory-items.component';

describe('AssignmentrInventoryItemsComponent', () => {
  let component: AssignmentrInventoryItemsComponent;
  let fixture: ComponentFixture<AssignmentrInventoryItemsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentrInventoryItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentrInventoryItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
