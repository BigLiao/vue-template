import Mock from 'mockjs';
const mock = Mock.mock;

mock('/mock/api/activity/list', require('./data/activity-list.json'));
mock('/mock/api/activity/detail', require('./data/activity-detail.json'));
mock('/mock/api/activity/applyPage', require('./data/activity-apply-page.json'));
mock('/mock/api/activity/apply', require('./data/activity-apply.json'));
mock('/mock/api/activity/apply/record', require('./data/activity-apply-record.json'));
mock('/mock/api/activity/user/applyRecord', require('./data/activity-user-apply-record.json'));
mock('/mock/api/activity/prize/draw', require('./data/activity-prize-draw.json'));
mock('/mock/api/activity/apply/detail', require('./data/activity-apply-detail.json'));