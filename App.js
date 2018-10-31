import React from 'react';
import { View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { AppNavigator } from './src/navigator/AppNavigator';
import store from './src/config/redux/store';

export default (App = () => {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="#cd1335" />
        <AppNavigator />
      </View>
    </Provider>
  );
});
