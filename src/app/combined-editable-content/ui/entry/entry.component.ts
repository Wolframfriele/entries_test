import { Component, input, output } from "@angular/core";
import { Entry } from "../../../entries.service";

@Component({
  selector: "app-entry",
  imports: [],
  standalone: true,
  template: `
    <li
      contenteditable="true"
      (input)="onInput($event)"
      (blur)="onSave()"
      [textContent]="entry().text"
    ></li>
  `,
  styles: ``,
})
export class EntryComponent {
  entry = input.required<Entry>();
  update = output<Entry>();

  private localState: string | undefined = undefined;

  onInput(event: Event) {
    const element = event?.target as HTMLElement;
    this.localState = element.innerText;
  }

  onSave() {
    if (this.localState) {
      this.update.emit({
        id: this.entry().id,
        text: this.localState,
        indent: this.entry().indent,
      });
    }
  }
}
