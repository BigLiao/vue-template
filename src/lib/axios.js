import axios from 'axios';


// const baseURL = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro;
const STUTS_OK = 200;

class HttpRequest {
  constructor(options) {
    this.pendding = {};
    const config = {
      baseURL: options.baseURL,
      headers: {
        // 这里可能放登录token
      }
    };
    const instance = axios.create(config);
    this.interceptors(instance);
    return instance;
  }
  addPendding(config, cancelFunc) {
    const { url, data } = config;
    const flag = `${url}:${JSON.stringify(data)}`;
    if (flag in this.pendding) {
      cancelFunc();
    } else {
      this.pendding[flag] = cancelFunc;
    }
  }
  removePendding(config) {
    const { url, data, baseURL } = config;
    const baseURLRegexp = new RegExp(`^\\${baseURL}`);
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
      if (res.data.code === STUTS_OK) {
        return [null, res.data];
      }
      return [res.data, null];
    }, (error) => {
      if (axios.isCancel(error)) {
        return [{ msg: '请求频率过快，请稍等再试。' }, {}];
      }
      this.removePendding(error.config);
      return [error, null];
    });
  }
}
export default HttpRequest;
