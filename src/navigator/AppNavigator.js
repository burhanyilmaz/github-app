import { connect } from 'react-redux';
import { createStackNavigator, withNavigation } from 'react-navigation';
import {
  createReactNavigationReduxMiddleware,
  reduxifyNavigator
} from 'react-navigation-redux-helpers';
import { getNavigationOptions } from './config/NavigatorOptions';
import { UserList, UserView } from '../modules/Users';
import { SCREEN_USER_LIST, SCREEN_USER_VIEW } from '../modules/Users/constants';

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

const AuthStack = createStackNavigator(
  {
    [SCREEN_USER_LIST]: {
      screen: UserList,
      navigationOptions: getNavigationOptions('Search Github Users')
    },
    [SCREEN_USER_VIEW]: {
      screen: UserView,
      navigationOptions: getNavigationOptions()
    }
  },
  { initialRouteName: SCREEN_USER_LIST }
);

const AppWithNavigationState = reduxifyNavigator(AuthStack, 'root');

const mapStateToProps = state => ({ state: state.nav });

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { AuthStack as RootNavigator, AppNavigator, middleware };
