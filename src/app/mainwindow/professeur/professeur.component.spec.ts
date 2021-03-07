import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProfesseurComponent } from './professeur.component';

describe('ProfesseurComponent', () => {
  let component: ProfesseurComponent;
  let fixture: ComponentFixture<ProfesseurComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesseurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
