import { defineConfig, tierPresets } from 'sponsorkit'

export default defineConfig({
  mode: "sponsors",
  renderer: "tiers",
  github: {
    login: 'KristanLaimon',
    type: 'user',
  },
  width: 800,
  formats: ['svg', 'png'],
  outputDir: ".",
  tiers: [
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: tierPresets.xs,
    },
    {
      title: 'Backers 🦊',
      // monthlyDollars: 1, # This is 1 dollar. But, currently I do not support one-time
      // sponsors, so this is $1 always, otherwise, here would go $1 and one-time sponsors.
      preset: tierPresets.medium,
    },
    {
      title: 'Gold | Prioritized (Bug, Features) 🐞',
      monthlyDollars: 3,
      preset: tierPresets.large,
    },
  ],
})