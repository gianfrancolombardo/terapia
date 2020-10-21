import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingProfessionalComponent } from './landing-professional.component';

describe('LandingProfessionalComponent', () => {
  let component: LandingProfessionalComponent;
  let fixture: ComponentFixture<LandingProfessionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingProfessionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
