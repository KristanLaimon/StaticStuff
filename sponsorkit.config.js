import { defineConfig, tierPresets } from 'sponsorkit'

export default defineConfig({
  mode: "sponsors",
  renderer: "tiers",
  outputDir: '.',
  github: {
    login: 'KristanLaimon',
    type: 'user',
  },
  width: 800,
  formats: ['svg', 'png'],
  tiers: [
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: tierPresets.xs,
    },
    {
      title: 'Backers 🦊',
      // sponsors, so this is $1 always, otherwise, here would go $1 and one-time sponsors.
      preset: tierPresets.medium,
    },
    {
      title: 'Gold | Prioritized (Bug, Features) 🐞',
      monthlyDollars: 3,
      preset: tierPresets.large,
    },
  ],
  renders: [
    {
      name: 'sponsors.part1', 
      width: 800,
      filter: (sponsor) => sponsor.monthlyDollars >= 3
    },
    {
      name: 'sponsors.part2', 
      width: 800,
      filter: (sponsor) => sponsor.monthlyDollars < 3 && sponsor.monthlyDollars >= 0
    },
    {
      name: 'sponsors.past', 
      width: 800,
      filter: (sponsor) => sponsor.monthlyDollars < 0
    }
  ]
})