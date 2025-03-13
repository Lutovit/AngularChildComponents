import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomComponentArrayComponent } from './custom-component-array.component';

describe('CustomComponentArrayComponent', () => {
  let component: CustomComponentArrayComponent;
  let fixture: ComponentFixture<CustomComponentArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomComponentArrayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomComponentArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
