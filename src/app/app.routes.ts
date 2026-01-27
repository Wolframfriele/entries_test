import { Routes } from "@angular/router";
import { CombinedEditableContentComponent } from "./combined-editable-content/combined-editable-content.component";
import { TextBoxPerEntryComponent } from "./text-box-per-entry/text-box-per-entry.component";

export const routes: Routes = [
  {
    path: "",
    component: CombinedEditableContentComponent,
    title: "Combined",
  },
  {
    path: "textbox",
    component: TextBoxPerEntryComponent,
    title: "Text box per entry",
  },
];
