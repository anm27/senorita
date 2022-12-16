export default {
  name: 'parlours',
  type: 'document',
  title: 'Parlours',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Parlours Name',
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
      title: `Parlours's Image`,
    },
    {
      name: 'genre',
      type: 'string',
      title: 'Genre',
    },
    {
      name: 'lat',
      type: 'number',
      title: 'Parlours Latitude',
    },
    {
      name: 'long',
      type: 'number',
      title: 'Parlours Longitude',
    },
    {
      name: 'address',
      type: 'string',
      title: 'Parlours Address',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Rating',
      validation: (Rule) => Rule.required().min(1).max(5).error('Pls enter between 1-5'),
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
