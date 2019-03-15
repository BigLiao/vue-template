import { http } from '@/lib/http';
import store from '../store';
import Qs from 'qs';

// 加入基础参数的post请求
export const post = (url, data) => http.post(url, Qs.stringify({ ...store.state.apiBaseParameter, ...data }));

// 活动详情
export function activityDetail(data) {
  return post('/api/activity/detail', data);
}

// 参加夺宝订单页
export function orderPage({ activityIdStr }) {
  return post('/api/activity/applyPage', { activityIdStr });
}

// 提交夺宝订单
export function orderSubmit({ activityIdStr, count }) {
  return post('/api/activity/apply', { activityIdStr, count });
}

// 夺宝参加记录
export function activityRecord({ activityIdStr, lastIdStr }) {
  return post('/api/activity/apply/record', { activityIdStr, lastIdStr });
}

// 用户的夺宝订单记录
export function orderList({ lastIdStr }) {
  return post('/api/activity/user/applyRecord', { lastIdStr });
}

// 奖品地址提交
export function takePrize({ activityIdStr, receiver, areaCode, phone, address }) {
  return post('/api/activity/prize/draw', { activityIdStr, receiver, areaCode, phone, address });
}

// 夺宝订单详情
export function orderInfo({ activityApplyIdStr }) {
  return post('/api/activity/apply/detail', { activityApplyIdStr });
}