/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.alterTable("squids", (t) => {
    t.date("birthday")
  })
}

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  return knex.schema.alterTable("squids", (t) => {
    t.dropColumn("birthday")
  })
}
