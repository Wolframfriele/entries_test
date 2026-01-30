import {Component, inject} from "@angular/core";
import {BlocksService} from '../blocks.service';
import {EntryComponent} from './ui/entry/entry.component';

@Component({
  selector: "app-blocks",
  imports: [
    EntryComponent
  ],
  standalone: true,
  template: `
    @for (block of blockService.blocks; track $index) {
      <ul>
        @for (entry of block.entries; track $index) {
          <app-entry
            [entryId]="entry"
          />
        }
      </ul>
    }
  `,
  styles: `
    :host {
      width: 50rem;
    }

    ul {
      list-style: none;
      margin: 0.5rem;
      padding-left: 0.5rem;
    }
  `,
})
export class BlocksComponent {
  blockService = inject(BlocksService);
}
