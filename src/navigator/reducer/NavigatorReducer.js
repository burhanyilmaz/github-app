import { NavigationActions } from 'react-navigation';
import { RootNavigator } from '../AppNavigator';
import { RESET, NAVIGATE } from '../constants';
import { navigate, reset } from '../utils';

const initialAction = { type: NavigationActions.Init };
const initialState = RootNavigator.router.getStateForAction(initialAction);

export default (state = initialState, action) => {
  let nextState;
  switch (action.type) {
    case NAVIGATE:
      nextState = navigate(action.payload.routeName, state);
      break;
    case RESET:
      nextState = reset(action.payload.routeName, state);
      break;
    default:
      nextState = RootNavigator.router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
};
