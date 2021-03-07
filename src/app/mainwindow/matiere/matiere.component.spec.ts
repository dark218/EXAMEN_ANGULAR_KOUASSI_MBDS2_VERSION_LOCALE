import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MatiereComponent } from './matiere.component';

describe('MatiereComponent', () => {
  let component: MatiereComponent;
  let fixture: ComponentFixture<MatiereComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MatiereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
