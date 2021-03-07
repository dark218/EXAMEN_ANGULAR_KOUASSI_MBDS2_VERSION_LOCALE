import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProfesseurInventoryItemsComponent } from './professeur-inventory-items.component';

describe('ProfesseurInventoryItemsComponent', () => {
  let component: ProfesseurInventoryItemsComponent;
  let fixture: ComponentFixture<ProfesseurInventoryItemsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesseurInventoryItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesseurInventoryItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
