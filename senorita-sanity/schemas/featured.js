export default {
  name: 'featured',
  type: 'document',
  title: 'Featured',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Featured Category Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Featured Description',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'image',
      type: 'image',
      title: `Featured Image`,
    },
    {
      name: 'parlours',
      type: 'array',
      title: `Parlours`,
      of: [{type: 'reference', to: [{type: 'parlours'}]}],
    },
  ],
}
