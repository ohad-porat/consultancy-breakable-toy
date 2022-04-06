import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"

/**
 * Used to make API calls to the backend.
 *
 * @export
 * @class ApiClient
 */
export class ApiClient {
  static get(path: string, params?: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.client().get(path, params)
  }

  static post(
    path: string,
    params: unknown,
    reqConfig?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    return this.client().post(path, params, reqConfig)
  }

  static patch(
    path: string,
    params: unknown,
    reqConfig?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    return this.client().patch(path, params, reqConfig)
  }

  static put(
    path: string,
    params: unknown,
    reqConfig?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    return this.client().put(path, params, reqConfig)
  }

  static delete(path: string, reqConfig?: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.client().delete(path, reqConfig)
  }

  // eslint-disable-next-line class-methods-use-this
  static client(): AxiosInstance {
    return axios.create({
      baseURL: `/api/v1`,
    })
  }
}
