import {Component, computed, inject, input} from "@angular/core";
import {BlocksService, Entry, EntryId} from '../../../blocks.service';

@Component({
  selector: "app-entry",
  imports: [],
  standalone: true,
  template: `
    <li [class.has-children]="entry().children.length > 0">
      <p [class.active]="entryId() === 'xdf'"
        contenteditable="true"
        (input)="onInput($event)"
        (blur)="onSave()"
      >{{ entry().content }}</p>
      @if (entry().children.length > 0) {
        <ul>
          @for (entry of entry().children; track $index) {
            <app-entry
              [entryId]="entry"
            />
          }
        </ul>
      }
    </li>
  `,
  styles: `
    p {
      margin: 0;
      padding: 0.2rem 0.4rem;
      border-radius: 5px;
    }

    ul {
      list-style: none;
      padding-left: 0.5rem;
    }

    li {
      position: relative;
      padding-left: 1rem;
      margin: 0;
    }

    // Disk
    li::before {
      content: "";
      position: absolute;
      left: -0.2rem;
      top: 0.5em;
      width: 0.5rem;
      height: 0.5rem;
      background: #888;
      border-radius: 50%;
      z-index: 1;
    }

    // Vertical line
    li.has-children::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0.5em;
      height: calc(100% - 0.5rem);
      border-left: 1px solid #555;
    }

    active {
      background: #2e2e2e;
    }
  `,
})
export class EntryComponent {
  entryId = input.required<EntryId>();

  blockService = inject(BlocksService);

  entry= computed<Entry>(() =>
    this.blockService.entries.get(this.entryId()) ?? {
    id: this.entryId(),
    content: "",
    children: []
  });

  private localState: string | undefined = undefined;

  onInput(event: Event) {
    const element = event?.target as HTMLElement;
    this.localState = element.innerText;
  }

  onSave() {
    if (this.localState) {
      console.log({
        id: this.entryId(),
        content: this.localState,
        children: this.entry().children,
      });
    }
  }
}
