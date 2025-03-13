import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplanatoryNoteModificationsComponent } from './explanatory-note-modifications.component';

describe('ExplanatoryNoteModificationsComponent', () => {
  let component: ExplanatoryNoteModificationsComponent;
  let fixture: ComponentFixture<ExplanatoryNoteModificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExplanatoryNoteModificationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplanatoryNoteModificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
