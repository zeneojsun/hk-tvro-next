import { defineType, defineField, defineArrayMember } from "sanity";

export const whyusSection = defineType({
  name: "whyusSection",
  title: "Why Us Section",
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
            defineField({ name: "title_en", title: "Title (EN)", type: "string" }),
            defineField({ name: "title_zh", title: "Title (ZH)", type: "string" }),
            defineField({ name: "body_en",  title: "Body (EN)",  type: "text" }),
            defineField({ name: "body_zh",  title: "Body (ZH)",  type: "text" }),
          ],
        }),
      ],
    }),
  ],
});
