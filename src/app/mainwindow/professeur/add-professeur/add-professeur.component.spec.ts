import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddProfesseurComponent } from './add-professeur.component';

describe('AddProfesseurComponent', () => {
  let component: AddProfesseurComponent;
  let fixture: ComponentFixture<AddProfesseurComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProfesseurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProfesseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
