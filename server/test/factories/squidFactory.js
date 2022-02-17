import { Factory } from "rosie"

import { Squid } from "../../src/models/index.js"

const chooseRandomSpecies = () => {
  const species = [
    "Colossal Squid",
    "Humboldt Squid",
    "European Squid",
    "Vampire Squid",
    "Caribbean Reef Squid",
    "Common Cuttlefish",
    "Chambered Nautilus",
    "Sepia Latimanus",
  ]

  return species[Math.floor(Math.random() * species.length)]
}

const chooseRandomSpecialPower = () => {
  const specialPowers = ["ink", "camouflage", "bioluminescence", "change color", null]

  return specialPowers[Math.floor(Math.random() * specialPowers.length)]
}

const getRandomNumber = () => Math.floor(Math.random() * 158).toString()

Factory.define("squid", Squid)
  .sequence("name", (i) => `Bob ${i}`)
  .attr("species", chooseRandomSpecies)
  .attr("specialPowers", chooseRandomSpecialPower)
  .attr("experiencePoints", getRandomNumber)

export { Factory }
