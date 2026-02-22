import { defineType, defineField } from "sanity";

export const hiringSection = defineType({
  name: "hiringSection",
  title: "Hiring Section",
  type: "document",
  fields: [
    defineField({ name: "title_en", title: "Title (EN)", type: "string" }),
    defineField({ name: "title_zh", title: "Title (ZH)", type: "string" }),
    defineField({ name: "desc_en",  title: "Description (EN)", type: "text" }),
    defineField({ name: "desc_zh",  title: "Description (ZH)", type: "text" }),
  ],
});
