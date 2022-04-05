import { Factory } from "rosie"

import { Squid } from "../../src/models/index.js"

const chooseRandomSpecies = () => {
  const speciesList = [
    "Colossal Squid",
    "Humboldt Squid",
    "European Squid",
    "Vampire Squid",
    "Caribbean Reef Squid",
    "Common Cuttlefish",
    "Chambered Nautilus",
    "Sepia Latimanus",
  ]

  return speciesList[Math.floor(Math.random() * speciesList.length)]
}

const chooseRandomSpecialPower = () => {
  const specialPowersList = ["ink", "camouflage", "bioluminescence", "change color"]

  return specialPowersList[Math.floor(Math.random() * specialPowersList.length)]
}

const getRandomNumber = () => Math.floor(Math.random() * 158).toString()

const getRandomDate = () => {
  const start = new Date(1972, 1, 1)
  const end = new Date(2019, 1, 1)
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}

Factory.define("Squid", Squid)
  .sequence("name", (i) => `Bob ${i}`)
  .attr("species", chooseRandomSpecies)
  .attr("specialPower", chooseRandomSpecialPower)
  .attr("experiencePoints", getRandomNumber)
  .attr("birthday", getRandomDate)

export { Factory }
