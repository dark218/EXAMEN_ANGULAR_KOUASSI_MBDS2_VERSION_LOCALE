import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddProfesseurElementsComponent } from './add-professeur-elements.component';

describe('AddProfesseurElementsComponent', () => {
  let component: AddProfesseurElementsComponent;
  let fixture: ComponentFixture<AddProfesseurElementsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProfesseurElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProfesseurElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
