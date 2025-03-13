import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpOrganizationComponent } from './ip-organization.component';

describe('IpOrganizationComponent', () => {
  let component: IpOrganizationComponent;
  let fixture: ComponentFixture<IpOrganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IpOrganizationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
