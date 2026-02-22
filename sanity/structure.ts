import type { StructureResolver } from "sanity/structure";

function singleton(S: any, id: string, title: string) {
  return S.listItem()
    .title(title)
    .id(id)
    .child(S.editor().title(title).schemaType(id).documentId(id));
}

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      singleton(S, "siteSettings",     "Site Settings"),
      S.divider(),
      singleton(S, "solutionsSection", "Solutions"),
      singleton(S, "industriesSection","Industries"),
      singleton(S, "whyusSection",     "Why Us"),
      singleton(S, "processSection",   "Process"),
      singleton(S, "projectsSection",  "Projects"),
      singleton(S, "contactSection",   "Contact"),
      singleton(S, "hiringSection",    "Hiring"),
    ]);
