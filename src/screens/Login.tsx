import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { Routes } from '../constants/constant';


function Login({ navigation }:any): React.JSX.Element {

    const  loginHandler = ()=> {
        // do the login 
        navigation.navigate(Routes.Home)
    }

  return (
   <View>
        <Text> Login screen</Text>
        <Button title = "Login" onPress={loginHandler}/>
    </View>
  );
}

const styles = StyleSheet.create({
 
});

export default Login;
