import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioFeatureComponent } from './portfolio-feature.component';

describe('PortfolioFeatureComponent', () => {
  let component: PortfolioFeatureComponent;
  let fixture: ComponentFixture<PortfolioFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
