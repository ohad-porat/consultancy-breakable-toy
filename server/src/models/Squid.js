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
        specialPower: {
          type: "string",
          enum: ["ink", "camouflage", "bioluminescence", "change color"],
        },
        experiencePoints: { type: ["integer", "string"], default: 0 },
      },
    }
  }
}

module.exports = Squid
