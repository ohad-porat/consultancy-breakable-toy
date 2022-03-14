import { Factory } from "../../../test/factories/Factory.js"
import { Squid } from "../../models/index.js"
import { Configuration } from "../../services/Configuration.js"
import "../../../test/factories/factories.js"

export class SquidSeeder {
  static async seed() {
    try {
      const config = new Configuration()
      const squidsToCreate = config.nodeEnv === "development" ? 15 : 3

      const squidFactory = new Factory(Squid)
      await squidFactory.createMany(squidsToCreate)
      // eslint-disable-next-line no-console
      console.log("Squids successfully seeded")
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(`Error in seeder: ${error}`)
    }
  }
}
