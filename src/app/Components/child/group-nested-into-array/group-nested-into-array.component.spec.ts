import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupNestedIntoArrayComponent } from './group-nested-into-array.component';

describe('GroupNestedIntoArrayComponent', () => {
  let component: GroupNestedIntoArrayComponent;
  let fixture: ComponentFixture<GroupNestedIntoArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroupNestedIntoArrayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupNestedIntoArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
