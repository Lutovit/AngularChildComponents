import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeignOrganizationComponent } from './foreign-organization.component';

describe('ForeignOrganizationComponent', () => {
  let component: ForeignOrganizationComponent;
  let fixture: ComponentFixture<ForeignOrganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForeignOrganizationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForeignOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
