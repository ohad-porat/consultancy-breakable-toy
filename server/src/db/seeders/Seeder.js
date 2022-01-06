import { connection } from "../../boot.js";

class Seeder {
  static async seed() {
    const seederClasses = [];

    await Promise.all(seederClasses.map((c) => c.seed()));

    if (connection) {
      console.log("Done!");
      await connection.destroy();
    }
  }
}

export default Seeder;
