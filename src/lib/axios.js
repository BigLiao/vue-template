import axios from 'axios';
import { Toast } from 'mint-ui';

// const baseURL = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro;
const STUTS_OK = 200;

class HttpRequest {
  constructor(options) {
    this.pendding = {};
    const config = {
      baseURL: options.baseURL,
      headers: {
        // 这里可能放登录token
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        ...options.headers
      }
    };
    const instance = axios.create(config);
    this.interceptors(instance);
    return instance;
  }
  addPendding(config, cancelFunc) {
    const { url, data } = config;
    const dataStr = (typeof data === 'string') ? data : JSON.stringify(data);
    const flag = `${url}:${dataStr}`;
    if (flag in this.pendding) {
      cancelFunc();
    } else {
      this.pendding[flag] = cancelFunc;
    }
  }
  removePendding(config) {
    const { url, data, baseURL } = config;
    const baseURLRegexp = new RegExp(`^\\${baseURL || '/'}`);
    const flag = `${url.replace(baseURLRegexp, '/')}:${data}`;
    delete this.pendding[flag];
  }
  interceptors(instance) {
    // 请求拦截
    instance.interceptors.request.use((config) => {
      config.cancelToken = new axios.CancelToken((func) => {
        this.addPendding(config, func);
      });
      return config;
    }, error => Promise.reject(error));
    // 响应拦截
    instance.interceptors.response.use((res) => {
      this.removePendding(res.config);
      if (res.data.status < 0) {
        handleServerError(res.data.status);
        return [{
          code: res.data.status,
          errorType: -1, // -2：网络错误，-1：服务器错误，0：接口错误
          isHandled: true,
          error: {},
          errorMessage: ''
        }, null];
      } else if (res.data.status === 0) {
        return [null, {
          code: 0,
          data: res.data.data
        }];
      } else {
        return [{
          code: res.data.status,
          errorType: 0, // -2：网络错误，-1：服务器错误，0：接口错误
          isHandled: false,
          error: {},
          errorMessage: ''
        }, null];
      }
    }, (error) => {
      if (axios.isCancel(error)) {
        return [{ msg: '请求频率过快，请稍等再试。' }, {}];
      }
      handleStatusError(error.response.status);
      this.removePendding(error.config);
      return [{
        code: error.response.status,
        errorType: -2, // -2：网络错误，-1：服务器错误，0：接口错误
        isHandled: true,
        error: {}
      }, null];
    });
  }
}
export default HttpRequest;

function handleServerError() {
  //
}

function handleStatusError() {
  //
}