import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './navigation/RootNavigator';


function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <RootNavigator/>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
 
});

export default App;
