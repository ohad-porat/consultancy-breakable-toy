import { Factory } from "../../../test/factories/Factory.js"
import { Squid } from "../../models/index.js"
import "../../../test/factories/factories.js"

export class SquidSeeder {
  static async seed() {
    try {
      const squidFactory = new Factory(Squid)

      await squidFactory.createMany(15)
      // eslint-disable-next-line no-console
      console.log("Squids successfully seeded")
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(`Error in seeder: ${error}`)
    }
  }
}
