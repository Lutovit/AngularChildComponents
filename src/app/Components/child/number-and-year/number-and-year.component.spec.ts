import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberAndYearComponent } from './number-and-year.component';

describe('NumberAndYearComponent', () => {
  let component: NumberAndYearComponent;
  let fixture: ComponentFixture<NumberAndYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NumberAndYearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberAndYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
