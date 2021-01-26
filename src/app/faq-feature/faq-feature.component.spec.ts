import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqFeatureComponent } from './faq-feature.component';

describe('FaqFeatureComponent', () => {
  let component: FaqFeatureComponent;
  let fixture: ComponentFixture<FaqFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
