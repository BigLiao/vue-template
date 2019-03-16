import activityList from './activity-list.js';

export default function(activityId) {
  const activity = activityList.find(item => item.activityId === activityId);
  if (activity) {
    return activity;
  } else {
    return activityList[0];
  }
}