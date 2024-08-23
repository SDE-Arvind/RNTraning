import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './navigation/RootNavigator';
import { store } from './store/store'
import { Provider } from 'react-redux'

function App(): React.JSX.Element {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator/>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
 
});

export default App;
