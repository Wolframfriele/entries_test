import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinedEditableContentComponent } from './combined-editable-content.component';

describe('CombinedEditableContentComponent', () => {
  let component: CombinedEditableContentComponent;
  let fixture: ComponentFixture<CombinedEditableContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombinedEditableContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombinedEditableContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
