import {combineReducers} from 'redux';

import usersReducer from './usersReduser';

const reducers = combineReducers({
   users: usersReducer
});

export default reducers;