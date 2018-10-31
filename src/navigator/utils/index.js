import { NavigationActions, StackActions } from 'react-navigation';
import { RootNavigator } from '../AppNavigator';

export const navigate = (routeName, state) =>
  RootNavigator.router.getStateForAction(
    NavigationActions.navigate({ routeName }),
    state
  );

export const reset = (routeName, state) =>
  RootNavigator.router.getStateForAction(
    StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName })]
    }),
    state
  );
