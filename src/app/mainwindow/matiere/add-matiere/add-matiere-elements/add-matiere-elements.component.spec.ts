import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddMatiereElementsComponent } from './add-matiere-elements.component';

describe('AddMatiereElementsComponent', () => {
  let component: AddMatiereElementsComponent;
  let fixture: ComponentFixture<AddMatiereElementsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMatiereElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMatiereElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
