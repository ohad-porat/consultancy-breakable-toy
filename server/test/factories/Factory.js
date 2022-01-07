import { Factory as RosieFactory } from "rosie";

// This allows us to insert graphs such that the children nodes can be
// either existing or new.
// E.g., if a user belongs to an organization, we can insert { user : {..., organization : {...}} }
// and if organization has an id, the user is inserted and related to the existing organization, whereas
// if the organization does not have an id, both the user and the organization are inserted (and related).
const insertGraphOptions = { relate: true };

class Factory {
  constructor(TargetModel) {
    this.TargetModel = TargetModel;
    this.targetModelName = new TargetModel().constructor.name;
  }

  getJSON(overrides, options) {
    return RosieFactory.attributes(this.targetModelName, overrides, options);
  }

  async build(overrides, options) {
    const json = await RosieFactory.build(this.targetModelName, overrides, options);
    return new this.TargetModel(json);
  }

  async create(overrides, options) {
    const instance = await this.build(overrides, options);
    return this.TargetModel.query().insertGraphAndFetch(instance, insertGraphOptions);
  }

  /**
   * Create many instances
   *
   * @param {Array?} overrides - obj if applied to all instances and array otherwise
   * @param {Object} options - Rosie factory options
   * @return {Array} instances - persisted objects
   * @memberof Factory
   */
  async createMany(overrides, options) {
    const instances = overrides.map(async (override) => this.build(override, options));
    const resolvedInstances = await Promise.all(instances);

    return this.TargetModel.query().insertGraphAndFetch(resolvedInstances, insertGraphOptions);
  }

  /**
   * Create many instances based off a single set of default properties
   * Useful, e.g., to create many instances with the same foreign key
   *
   * @param {Number} number - desired number of objects
   * @param {Object} overrides
   * @param {Object} options - Rosie factory options
   * @return {Array} instances - persisted objects
   * @memberof Factory
   */
  async createManyWithSharedProperties(number, overrides, options) {
    const instances = [...Array(number)].map(async () => this.build(overrides, options));
    const resolvedInstances = await Promise.all(instances);

    return this.TargetModel.query().insertGraphAndFetch(resolvedInstances, insertGraphOptions);
  }
}

export { Factory };
