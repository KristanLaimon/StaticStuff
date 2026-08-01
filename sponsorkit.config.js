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
  tiers: [
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: tierPresets.xs,
    },
    {
      title: 'Backers 🦊',
      monthlyDollars: 1,
      preset: tierPresets.medium,
    },
    {
      title: 'Gold | Prioritized (Bug, Features) 🐞',
      monthlyDollars: 3,
      preset: tierPresets.large,
    },
  ],
})