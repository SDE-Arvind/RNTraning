import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { Routes } from '../constants/constant';


function Tab1({ navigation }:any): React.JSX.Element {

  return (
   <View>
        <Text> Tab1 screen</Text>
        <Button title='Go to tab2' onPress={()=>{navigation.navigate(Routes.Tab2)}}/>
    </View>
  );
}

const styles = StyleSheet.create({
 
});

export default Tab1;
