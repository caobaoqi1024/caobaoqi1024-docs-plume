import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const mavenNote = defineNoteConfig({
  dir: 'maven',
  link: '/maven',
  sidebar: ['', 'basic'],
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [mavenNote],
})
