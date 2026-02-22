import { defineType, defineField } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "companyName",
      title: "Company Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "heroTitle_en",
      title: "Hero Title (English)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroTitle_zh",
      title: "Hero Title (Chinese)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "heroEyebrow_en", title: "Hero Eyebrow (English)", type: "string" }),
    defineField({ name: "heroEyebrow_zh", title: "Hero Eyebrow (Chinese)", type: "string" }),
    defineField({ name: "heroSubtitle_en", title: "Hero Subtitle (English)", type: "text" }),
    defineField({ name: "heroSubtitle_zh", title: "Hero Subtitle (Chinese)", type: "text" }),
  ],
});