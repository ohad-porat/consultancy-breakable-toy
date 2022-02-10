const Model = require("./Model")

class Squid extends Model {
  static get tableName() {
    return "squids"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "species", "experiencePoints"],
      properties: {
        name: { type: "string" },
        species: { type: "string" },
        specialPower: { type: "string" },
        experiencePoints: { type: ["integer", "string"], default: 0 },
      },
    }
  }
}

module.exports = Squid
