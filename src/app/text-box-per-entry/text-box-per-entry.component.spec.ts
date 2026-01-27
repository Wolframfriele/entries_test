import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBoxPerEntryComponent } from './text-box-per-entry.component';

describe('TextBoxPerEntryComponent', () => {
  let component: TextBoxPerEntryComponent;
  let fixture: ComponentFixture<TextBoxPerEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextBoxPerEntryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextBoxPerEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
