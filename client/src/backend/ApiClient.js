import axios from "axios";
import httpAdapter from "axios/lib/adapters/http";

import { config } from "../config";

export class ApiClient {
  constructor(token) {
    this.token = token;
  }

  get(path, params) {
    return this.client().get(path, params);
  }

  post(path, params, reqConfig) {
    return this.client().post(path, params, reqConfig);
  }

  patch(path, params, reqConfig) {
    return this.client().patch(path, params, reqConfig);
  }

  put(path, params, reqConfig) {
    return this.client().put(path, params, reqConfig);
  }

  delete(path, data) {
    return this.client().delete(path, { data });
  }

  // eslint-disable-next-line class-methods-use-this
  client() {
    axios.interceptors.response.use(
      (response) => response,
      (error) => Promise.reject(error)
    );
    // hack to get axios to cooperate with nock
    if (config.reactEnv === "test") {
      axios.defaults.adapter = httpAdapter;
    }

    let headers = {};
    if (this.token) {
      headers = {
        ...headers,
        Authorization: `Bearer ${this.token}`,
      };
    }

    return axios.create({
      baseURL: `${config.baseServerUri}/api/v1`,
      headers,
      withCredentials: true,
    });
  }
}
