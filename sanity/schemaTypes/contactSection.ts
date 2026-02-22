import { defineType, defineField } from "sanity";

export const contactSection = defineType({
  name: "contactSection",
  title: "Contact Section",
  type: "document",
  fields: [
    defineField({ name: "title_en",    title: "Title (EN)",    type: "string" }),
    defineField({ name: "title_zh",    title: "Title (ZH)",    type: "string" }),
    defineField({ name: "subtitle_en", title: "Subtitle (EN)", type: "string" }),
    defineField({ name: "subtitle_zh", title: "Subtitle (ZH)", type: "string" }),
  ],
});
