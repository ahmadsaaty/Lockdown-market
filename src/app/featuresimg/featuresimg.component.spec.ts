import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesimgComponent } from './featuresimg.component';

describe('FeaturesimgComponent', () => {
  let component: FeaturesimgComponent;
  let fixture: ComponentFixture<FeaturesimgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturesimgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
