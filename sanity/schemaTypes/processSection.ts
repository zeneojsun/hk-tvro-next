import { defineType, defineField, defineArrayMember } from "sanity";

export const processSection = defineType({
  name: "processSection",
  title: "Process Section",
  type: "document",
  fields: [
    defineField({ name: "title_en", title: "Section Title (EN)", type: "string" }),
    defineField({ name: "title_zh", title: "Section Title (ZH)", type: "string" }),
    defineField({
      name: "steps",
      title: "Steps",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "stepNumber", title: "Step Number (e.g. 01)", type: "string" }),
            defineField({ name: "title_en",   title: "Title (EN)", type: "string" }),
            defineField({ name: "title_zh",   title: "Title (ZH)", type: "string" }),
            defineField({ name: "body_en",    title: "Body (EN)",  type: "text" }),
            defineField({ name: "body_zh",    title: "Body (ZH)",  type: "text" }),
          ],
        }),
      ],
    }),
  ],
});
