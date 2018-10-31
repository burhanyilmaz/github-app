// All App State
import { combineReducers } from 'redux';
import NavigatorReducer from '../../navigator/reducer/NavigatorReducer';
import { STATE_USERS } from '../../modules/Users/constants';
import UsersReducer from '../../modules/Users/reducer/UsersReducer';

export default combineReducers({
    nav: NavigatorReducer,
    [STATE_USERS]: UsersReducer,
})