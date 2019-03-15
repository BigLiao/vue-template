import Url from 'url-parse';

export function imageClip(imgUrl, size = 100) {
  const url = new Url(imgUrl, true);
  url.query['x-oss-process'] = `image/resize,m_fill,h_${size},w_${size}`;
  return url.toString();
}