import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberAndYearV2Component } from './number-and-year-v2.component';

describe('NumberAndYearV2Component', () => {
  let component: NumberAndYearV2Component;
  let fixture: ComponentFixture<NumberAndYearV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NumberAndYearV2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberAndYearV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
