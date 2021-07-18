import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangaugeComponent } from './langauge.component';

describe('LangaugeComponent', () => {
  let component: LangaugeComponent;
  let fixture: ComponentFixture<LangaugeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LangaugeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LangaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
