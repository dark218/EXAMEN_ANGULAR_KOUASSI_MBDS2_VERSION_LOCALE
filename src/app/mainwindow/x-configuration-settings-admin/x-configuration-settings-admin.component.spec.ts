import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { XConfigurationSettingsAdminComponent } from './x-configuration-settings-admin.component';

describe('XConfigurationSettingsAdminComponent', () => {
  let component: XConfigurationSettingsAdminComponent;
  let fixture: ComponentFixture<XConfigurationSettingsAdminComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ XConfigurationSettingsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XConfigurationSettingsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
