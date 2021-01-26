import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsFeatureComponent } from './steps-feature.component';

describe('StepsFeatureComponent', () => {
  let component: StepsFeatureComponent;
  let fixture: ComponentFixture<StepsFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepsFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
