import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'nbvsewo8',
    dataset: 'production'
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
    appId: 'wszbzt7fzxwb1ay1g02l2edz',
  },
  typegen: {
    enabled: true,
    path: '../designedbybeen/{app,components,lib}/**/*.{ts,tsx,js,jsx}',
    schema: 'schema.json',
    generates: '../designedbybeen/sanity.types.ts',
    overloadClientMethods: true,
  },
})
