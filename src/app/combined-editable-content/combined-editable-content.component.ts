import { Component, effect, inject, model } from "@angular/core";
import { EntriesService, Entry } from "../entries.service";
import { FormsModule } from "@angular/forms";
import { EntryComponent } from "./ui/entry/entry.component";

@Component({
  selector: "app-combined-editable-content",
  standalone: true,
  imports: [FormsModule, EntryComponent],
  template: `
    <ul>
      @for (entry of entriesModel().values(); track $index) {
        <app-entry [entry]="entry" (update)="onUpdate($event)" />
      }
    </ul>
  `,
  styles: `
    :host {
      max-width: 25rem;
    }
  `,
})
export class CombinedEditableContentComponent {
  entryService = inject(EntriesService);
  entriesModel = model<Map<string, Entry>>(new Map());

  constructor() {
    effect(() => this.entriesModel.set(this.entryService.entries()));
  }

  onUpdate(entry: Entry) {
    console.log(`Updating: ${entry}`);
  }
}
