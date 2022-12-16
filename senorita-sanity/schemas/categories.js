export default {
  name: 'categories',
  type: 'document',
  title: 'Categories',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Category Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: `Category Image`,
    },
    // {
    //   name: 'dishes',
    //   type: 'array',
    //   title: `Dishes`,
    //   of: [{type: 'reference', to: [{type: 'dishes'}]}],
    // },
  ],
}
