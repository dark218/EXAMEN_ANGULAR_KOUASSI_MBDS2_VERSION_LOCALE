import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProfesseurInventoryComponent } from './professeur-inventory.component';

describe('ProfesseurInventoryComponent', () => {
  let component: ProfesseurInventoryComponent;
  let fixture: ComponentFixture<ProfesseurInventoryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesseurInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesseurInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
