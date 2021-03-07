import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MenuitemComponent } from './menuitem.component';

describe('MenuitemComponent', () => {
  let component: MenuitemComponent;
  let fixture: ComponentFixture<MenuitemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
