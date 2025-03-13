import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplanatoryNoteModificationsV2Component } from './explanatory-note-modifications-v2.component';

describe('ExplanatoryNoteModificationsV2Component', () => {
  let component: ExplanatoryNoteModificationsV2Component;
  let fixture: ComponentFixture<ExplanatoryNoteModificationsV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExplanatoryNoteModificationsV2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplanatoryNoteModificationsV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
