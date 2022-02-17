/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("squids", (t) => {
    t.bigIncrements("id")
    t.string("name").notNullable()
    t.string("species").notNullable()
    t.enu("specialPower", ["ink", "camouflage", "bioluminescence", "change color"])
    t.integer("experiencePoints").defaultTo(0).notNullable()
    t.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
    t.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  return knex.schema.dropTableIfExists("squids")
}
