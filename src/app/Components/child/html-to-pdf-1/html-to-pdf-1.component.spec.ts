import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlToPdf1Component } from './html-to-pdf-1.component';

describe('HtmlToPdf1Component', () => {
  let component: HtmlToPdf1Component;
  let fixture: ComponentFixture<HtmlToPdf1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HtmlToPdf1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlToPdf1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
