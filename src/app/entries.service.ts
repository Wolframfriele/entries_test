import { computed, Injectable, signal } from "@angular/core";
import { v4 as uuidv4 } from "uuid";

export interface Entry {
  id: string;
  text: string;
  indent: number;
}

@Injectable({
  providedIn: "root",
})
export class EntriesService {
  private readonly _entries = signal<Map<string, Entry>>(
    new Map([
      [
        "a22ac1f1-2695-40d2-bbd4-d59a1cf44473",
        {
          id: "a22ac1f1-2695-40d2-bbd4-d59a1cf44473",
          text: "The first entry in the overview",
          indent: 0,
        },
      ],
      [
        "8f97614b-abc7-43b3-b67f-9873fc5627f9",
        {
          id: "8f97614b-abc7-43b3-b67f-9873fc5627f9",
          text: "I need some longer sentences in this overview to be able to test how multiline strings work.",
          indent: 0,
        },
      ],
      [
        "383d78e3-cb2a-40be-9298-3dbeb596835f",
        {
          id: "383d78e3-cb2a-40be-9298-3dbeb596835f",
          text: "Some more lines so that I can move between them.",
          indent: 0,
        },
      ],
    ]),
  );
  entries = computed(() => this._entries());

  add(text: string, indent = 0) {
    const id = uuidv4();
    this._entries.update((entries) => entries.set(id, { id, text, indent }));
  }

  update(id: string, text: string, indent = 0) {
    this._entries.update((entries) => entries.set(id, { id, text, indent }));
  }
}
