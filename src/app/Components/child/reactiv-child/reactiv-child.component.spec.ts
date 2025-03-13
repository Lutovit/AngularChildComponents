import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivChildComponent } from './reactiv-child.component';

describe('ReactivChildComponent', () => {
  let component: ReactivChildComponent;
  let fixture: ComponentFixture<ReactivChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReactivChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactivChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
