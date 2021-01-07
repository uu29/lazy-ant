/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import AppStack from './src/screens';
import {Provider} from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <AppStack />
    </Provider>
  );
};

export default App;
