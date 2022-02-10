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
    t.string("specialPower")
    t.integer("experiencePoints").defaultTo(0).notNullable()
  })
}

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  return knex.schema.dropTableIfExists("squids")
}
