import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingCouchComponent } from './landing-couch.component';

describe('LandingCouchComponent', () => {
  let component: LandingCouchComponent;
  let fixture: ComponentFixture<LandingCouchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingCouchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingCouchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
