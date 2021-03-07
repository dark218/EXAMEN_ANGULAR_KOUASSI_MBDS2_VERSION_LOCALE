import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HeaderUserdetailsComponent } from './header-userdetails.component';

describe('HeaderUserdetailsComponent', () => {
  let component: HeaderUserdetailsComponent;
  let fixture: ComponentFixture<HeaderUserdetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderUserdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderUserdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
