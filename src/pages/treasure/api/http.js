import { http } from '@/lib/http';
import store from '../store';

// 加入基础参数的post请求
export const post = (url, data) => http.post(url, { ...store.state.apiBaseParamater, ...data });