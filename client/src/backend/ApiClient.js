import axios from "axios";

/**
 * Used to make API calls to the backend.
 *
 * @export
 * @class ApiClient
 */
export class ApiClient {
  static get(path, params) {
    return this.client().get(path, params);
  }

  static post(path, params, reqConfig) {
    return this.client().post(path, params, reqConfig);
  }

  static patch(path, params, reqConfig) {
    return this.client().patch(path, params, reqConfig);
  }

  static put(path, params, reqConfig) {
    return this.client().put(path, params, reqConfig);
  }

  static delete(path, reqConfig) {
    return this.client().delete(path, reqConfig);
  }

  // eslint-disable-next-line class-methods-use-this
  static client() {
    return axios.create({
      baseURL: `api/v1`,
    });
  }
}
