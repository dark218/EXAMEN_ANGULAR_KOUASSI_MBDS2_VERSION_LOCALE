import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MatiereInventoryItemsComponent } from './matiere-inventory-items.component';

describe('MatiereInventoryItemsComponent', () => {
  let component: MatiereInventoryItemsComponent;
  let fixture: ComponentFixture<MatiereInventoryItemsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MatiereInventoryItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatiereInventoryItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
