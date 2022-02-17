// eslint-disable-next-line import/no-extraneous-dependencies
const ObjectionModel = require("objection").Model

/**
 * Abstract model for Transporter ORM
 * Hackery in this directory is due to VSCode not recognizing
 * or following CJS files. Changing them back to .js extensions makes
 * working with Object a lot easier (we get intellisense for Objection)
 *
 * @class Model
 */
class Model extends ObjectionModel {
  constructor(attributes = {}) {
    super()
    if (attributes !== {}) {
      this.$set(attributes)
    }
  }

  $beforeInsert() {
    this.createdAt = new Date().toISOString()
    this.updatedAt = new Date().toISOString()
  }

  $beforeUpdate() {
    this.updatedAt = new Date().toISOString()
  }

  // https://vincit.github.io/objection.js/api/model/static-properties.html#static-uselimitinfirst
  static get useLimitInFirst() {
    return true
  }

  // Allows relations to be specified as model name rather than path/Model class
  // https://vincit.github.io/objection.js/api/model/static-properties.html#static-modelpaths
  static get modelPaths() {
    return [__dirname]
  }
}

module.exports = Model
