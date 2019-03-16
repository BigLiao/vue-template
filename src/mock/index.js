import Mock from 'mockjs';
const mock = Mock.mock;
const activityList = require('./data/activity-list.json');
const recordList = require('./data/activity-user-apply-record.json');

mock('/mock/api/activity/list', function(options) {
  return activityList;
});
mock('/mock/api/activity/detail', require('./data/activity-detail.json'));
mock('/mock/api/activity/applyPage', require('./data/activity-apply-page.json'));
mock('/mock/api/activity/apply', require('./data/activity-apply.json'));
mock('/mock/api/activity/apply/record', require('./data/activity-apply-record.json'));
mock('/mock/api/activity/user/applyRecord', function(options) {
  return recordList;
});
mock('/mock/api/activity/prize/draw', require('./data/activity-prize-draw.json'));
mock('/mock/api/activity/apply/detail', require('./data/activity-apply-detail.json'));

function success(data) {
  return {
    'status': 0,
    'hasError': false,
    'data': {
      'result': 1,
      'msg': 'success',
      'errorCode': 0,
      'errorMessage': '',
      'extraValue': '',
      ...data
    },
    'serverTimestamp': 1552544405829
  };
}

function error(data) {
  return {
    'status': 20004,
    'hasError': true,
    'data': {
      'result': 0,
      'msg': 'head param bean client id invalid',
      'errorCode': 20004,
      'errorMessage': '',
      'extraValue': ''
    },
    'error': {
      'code': 20004,
      'message': 'head param bean client id invalid'
    },
    'serverTimestamp': 1551859324417
  };
}