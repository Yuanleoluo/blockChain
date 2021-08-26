import selectedActivityReducer from './selected-activity-reducer';
import activityListReducer from './activity-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	selectedActivity: selectedActivityReducer,
	masterActivityList: activityListReducer
});

export default rootReducer;