import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AssignmentrInventoryComponent } from './assignmentr-inventory.component';

describe('AssignmentrInventoryWindowComponent', () => {
  let component: AssignmentrInventoryComponent;
  let fixture: ComponentFixture<AssignmentrInventoryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentrInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentrInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
