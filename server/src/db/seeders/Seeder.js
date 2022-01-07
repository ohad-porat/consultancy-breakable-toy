import { connection } from "../../boot.js";

export class Seeder {
  static async seed() {
    const seederClasses = [];

    await Promise.all(seederClasses.map((c) => c.seed()));

    if (connection) {
      // eslint-disable-next-line no-console
      console.log("Done!");
      await connection.destroy();
    }
  }
}
