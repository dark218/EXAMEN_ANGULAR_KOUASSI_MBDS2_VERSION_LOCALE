import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MatiereInventoryComponent } from './matiere-inventory.component';

describe('MatiereInventoryComponent', () => {
  let component: MatiereInventoryComponent;
  let fixture: ComponentFixture<MatiereInventoryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MatiereInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatiereInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
