export default {
  name: 'package',
  type: 'document',
  title: 'Package',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Package Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short Description',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'image',
      type: 'image',
      title: `Package Image`,
    },
    {
      name: 'genre',
      type: 'string',
      title: 'Genre',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Package Price (in INR)',
    },
    // {
    //   name: 'type',
    //   type: 'reference',
    //   title: 'Categories',
    //   validation: (Rule) => Rule.required(),
    //   to: [{type: 'categories'}],
    // },
    //   {
    //     name: 'dishes',
    //     type: 'array',
    //     title: 'Dishes',
    //     validation: (Rule) => Rule.required(),
    //     of: [{type: 'reference', to: [{type: 'dishes'}]}],
    //   },
  ],
}
