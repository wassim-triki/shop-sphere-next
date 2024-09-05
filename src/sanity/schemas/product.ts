import { defineArrayMember, defineField, defineType } from "sanity";
import { PackageIcon } from "@sanity/icons";

export default defineType({
  name: "product",
  title: "Product",
  icon: PackageIcon,
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (rule) => rule.required() && rule.positive(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [defineArrayMember({ type: "image" })],
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "dayShipping",
      title: "Day Shipping",
      type: "object",
      fields: [
        defineField({
          name: "min",
          title: "Min",
          type: "number",
          validation: (rule) => rule.required() && rule.positive(),
        }),
        defineField({
          name: "max",
          title: "Max",
          type: "number",
          validation: (rule) => rule.required() && rule.positive(),
        }),
      ],
      initialValue: {
        min: 2,
        max: 4,
      },
    }),

    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (rule) => rule.required() && rule.min(0) && rule.max(5),
    }),
    // Sale field with conditional validation for salePrice
    defineField({
      name: "sale",
      title: "Sale",
      type: "object",
      fields: [
        defineField({
          name: "isActive",
          title: "Is Active",
          type: "boolean",
          initialValue: false,
        }),
        defineField({
          name: "salePrice",
          title: "Sale Price",
          type: "number",
          validation: (rule) =>
            rule.custom((salePrice, { document }) => {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              const isActive = (document?.sale as { isActive?: boolean })
                ?.isActive;

              // If isActive is true, salePrice must be provided
              if (isActive && !salePrice) {
                return "Sale price is required when the sale is active.";
              }

              // No issues if validation passes
              return true;
            }),
        }),
      ],
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    }),
  ],
});
