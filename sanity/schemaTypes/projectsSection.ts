import { defineType, defineField, defineArrayMember } from "sanity";

export const projectsSection = defineType({
  name: "projectsSection",
  title: "Projects Section",
  type: "document",
  fields: [
    defineField({ name: "title_en", title: "Section Title (EN)", type: "string" }),
    defineField({ name: "title_zh", title: "Section Title (ZH)", type: "string" }),
    defineField({
      name: "items",
      title: "Items",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "title_en",   title: "Title (EN)",   type: "string" }),
            defineField({ name: "title_zh",   title: "Title (ZH)",   type: "string" }),
            defineField({ name: "scope_en",   title: "Scope (EN)",   type: "string" }),
            defineField({ name: "scope_zh",   title: "Scope (ZH)",   type: "string" }),
            defineField({ name: "outcome_en", title: "Outcome (EN)", type: "text" }),
            defineField({ name: "outcome_zh", title: "Outcome (ZH)", type: "text" }),
          ],
        }),
      ],
    }),
  ],
});
