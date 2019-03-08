import Mock from 'mockjs';

Mock.mock('/mock/message', 'get', {
  code: 200,
  data: 'Hello World'
});