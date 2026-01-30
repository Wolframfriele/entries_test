import { Injectable } from "@angular/core";

export type BlockId = string;
export type EntryId = string;

export interface Entry {
  id: EntryId;
  content: string;
  children: EntryId[];
}

export interface Block {
  id: BlockId;
  entries: EntryId[];
}

@Injectable({
  providedIn: "root",
})
export class BlocksService {
  private entry_1: Entry = {
    id: "bi6",
    content: "A child node",
    children: [],
  };
  private entry_2: Entry = {
    id: "2ep",
    content: "This is another child node",
    children: [],
  };
  private entry_3: Entry = {
    id: "mwp",
    content: "one level deeper",
    children: [this.entry_2.id],
  };
  private entry_4: Entry = {
    id: "p04",
    content:
      "Another root entry, that is a bit longer than the other one to check how multiple lines work.",
    children: [],
  };
  private entry_5: Entry = {
    id: "xdf",
    content: "This is a root entry with a bunch of children.",
    children: [this.entry_1.id, this.entry_3.id],
  };
  private block_1: Block = {
    id: "1ab",
    entries: [this.entry_5.id, this.entry_4.id],
  };
  blocks: Block[] = [this.block_1];
  entries: Map<EntryId, Entry> = new Map([
    [this.entry_1.id, this.entry_1],
    [this.entry_2.id, this.entry_2],
    [this.entry_3.id, this.entry_3],
    [this.entry_4.id, this.entry_4],
    [this.entry_5.id, this.entry_5],
  ])
}
