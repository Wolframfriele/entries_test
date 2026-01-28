import { Injectable } from "@angular/core";

export type BlockId = string;
export type EntryId = string;
export type ProjectId = string;

export interface Entry {
  id: EntryId;
  content: string;
  children: Entry[];
}

export interface Block {
  id: BlockId;
  entries: Entry[];
}

@Injectable({
  providedIn: "root",
})
export class BlocksService {
  entry_1: Entry = {
    id: "bi6",
    content: "A child node",
    children: [],
  };
  entry_2: Entry = {
    id: "2ep",
    content: "This is another child node",
    children: [],
  };
  entry_3: Entry = {
    id: "mwp",
    content: "one level deeper",
    children: [this.entry_2],
  };
  entry_4: Entry = {
    id: "p04",
    content:
      "Another root entry, that is a bit longer than the other one to check how multiple lines work.",
    children: [],
  };
  entry_5: Entry = {
    id: "xdf",
    content: "This is a root entry with a bunch of children.",
    children: [this.entry_1, this.entry_3],
  };
  block_1: Block = {
    id: "1ab",
    entries: [this.entry_5, this.entry_4],
  };
  blocks: Map<BlockId, Block> = new Map([["1ab", this.block_1]]);

  constructor() {}
}
