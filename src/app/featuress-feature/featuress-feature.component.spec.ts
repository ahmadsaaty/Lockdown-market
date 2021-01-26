import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturessFeatureComponent } from './featuress-feature.component';

describe('FeaturessFeatureComponent', () => {
  let component: FeaturessFeatureComponent;
  let fixture: ComponentFixture<FeaturessFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturessFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturessFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
