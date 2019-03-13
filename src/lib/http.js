import HttpRequest from '@/lib/axios';
import config from '@/config';

// 获取mock数据，要去mock文件夹下定义接口
export const mockHttp = new HttpRequest({
  baseURL: config.baseUrlMock
});

// 真实接口
export const http = new HttpRequest({
  baseURL: config.baseUrlProd
});
