import { Component } from "@angular/core";

@Component({
  selector: "app-text-box-per-entry",
  imports: [],
  template: `
    <ul>
      <li>This is the first entry</li>
      <li>This is the second</li>
      <ul>
        <li>A deeper nested level</li>
      </ul>
    </ul>
  `,
  styles: `
    ul {
      border-left: solid white 1px;
      padding-left: 2rem;
    }
  `,
})
export class TextBoxPerEntryComponent {}
