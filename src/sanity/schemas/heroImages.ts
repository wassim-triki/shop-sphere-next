import { defineField, defineType } from "sanity";

export default defineType({
  name: "heroImages",
  title: "Hero Images",
  type: "document",
  fields: [
    defineField({
      name: "image1",
      title: "Image 1",
      type: "image",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image2",
      title: "Image 2",
      type: "image",
      validation: (rule) => rule.required(),
    }),
  ],
});
