import { Factory } from "../../../test/factories/Factory.js"
import { Squid } from "../../models/index.js"
import "../../../test/factories/factories.js"

export class SquidSeeder {
  static async seed() {
    try {
      const squidFactory = new Factory(Squid)

      await squidFactory.createMany(15)
      console.log("Squids successfully seeded")
    } catch (error) {
      console.log(`Error in seeder: ${error}`)
    }
  }
}
