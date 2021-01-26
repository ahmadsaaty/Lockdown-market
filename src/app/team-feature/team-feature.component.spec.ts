import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamFeatureComponent } from './team-feature.component';

describe('TeamFeatureComponent', () => {
  let component: TeamFeatureComponent;
  let fixture: ComponentFixture<TeamFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
