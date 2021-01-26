import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceFeatureComponent } from './service-feature.component';

describe('ServiceFeatureComponent', () => {
  let component: ServiceFeatureComponent;
  let fixture: ComponentFixture<ServiceFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
