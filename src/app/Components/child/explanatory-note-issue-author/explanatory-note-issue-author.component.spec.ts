import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplanatoryNoteIssueAuthorComponent } from './explanatory-note-issue-author.component';

describe('ExplanatoryNoteIssueAuthorComponent', () => {
  let component: ExplanatoryNoteIssueAuthorComponent;
  let fixture: ComponentFixture<ExplanatoryNoteIssueAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExplanatoryNoteIssueAuthorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplanatoryNoteIssueAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
