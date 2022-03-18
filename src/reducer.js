import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	main: mainReducer,
});

export default rootReducer;

export function mainReducer(state = null, action) {
	switch (action.type) {
		case 'SHOW_COMMENT':
			return action.payload;
		default:
			return state;
	}
}
