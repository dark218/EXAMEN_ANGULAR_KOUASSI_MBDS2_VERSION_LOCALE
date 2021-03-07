import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddNewUsersComponent } from './add-new-users.component';

describe('AddNewUsersComponent', () => {
  let component: AddNewUsersComponent;
  let fixture: ComponentFixture<AddNewUsersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
