import axios, { AxiosPromise } from 'axios';
import getEnvConfig from 'config';

const { internalAPIHost } = getEnvConfig();

type HTTPMethod = 'get' | 'post' | 'delete' | 'put';

function call<T>(method: HTTPMethod, url: string): AxiosPromise<T> {
  return axios.request({ method, url: `${internalAPIHost}${url}` });
}

function callWithData<T>(
  method: HTTPMethod,
  url: string,
  data: unknown
): AxiosPromise<T> {
  return axios.request({ method, data, url: `${internalAPIHost}${url}` });
}

class APIBuilder {
  get<T>(url: string) {
    return call<T>('get', url);
  }

  post<T>(url: string, data?: unknown) {
    return callWithData<T>('post', url, data);
  }

  delete<T>(url: string) {
    return call<T>('delete', url);
  }

  put<T>(url: string, data?: unknown) {
    return callWithData<T>('put', url, data);
  }
}

export default new APIBuilder();
