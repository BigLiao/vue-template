import { mockHttp, http } from '@/lib/http';

export function getMessage() {
  return mockHttp.get('/message');
}