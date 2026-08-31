import {defineArrayMember, defineField, defineType} from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      type: 'string',
      options: {
        list: [
          {title: 'Residential', value: 'residential'},
          {title: 'Commercial', value: 'commercial'},
          {title: 'Academic', value: 'academic'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'summary', type: 'text'}),
    defineField({name: 'location', type: 'string'}),
    defineField({name: 'architect', type: 'string'}),
    defineField({name: 'designer', type: 'string'}),
    defineField({name: 'coverImage', type: 'image', options: {hotspot: true}}),
    defineField({
      name: 'gallery',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({name: 'alt', type: 'string', title: 'Alt text'}),
            defineField({name: 'caption', type: 'string'}),
            defineField({name: 'isCover', type: 'boolean', title: 'Is Cover Image'}),
          ],
        }),
      ],
    }),
    defineField({
      name: 'video',
      title: 'Video',
      type: 'file',
      description: 'Short clips/previews only — not for full production video.',
      options: {accept: 'video/*'},
    }),
    defineField({name: 'publishedAt', type: 'datetime'}),
  ],
  preview: {
    select: {title: 'title', subtitle: 'category', media: 'coverImage'},
  },
})
