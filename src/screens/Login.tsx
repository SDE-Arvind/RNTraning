import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {Routes} from '../constants/constant';
import {sign} from 'react-native-pure-jwt';
import {AUTH_TOKEN_KEY, MY_TOKEN_SECRET} from '../utility/constants';
import {storage} from '../utility/asyncStorage';

function Login({navigation}: any): React.JSX.Element {
  const loginHandler = () => {
    sign(
      {
        iss: 'arvind@gmail.com',
        exp: Date.now() + 5 * 1000, // setting token for next 5 seconds
        additional: 'payload',
      },
      MY_TOKEN_SECRET,
      {alg: 'HS256'},
    )
      .then(result => {
        storage.setItem(AUTH_TOKEN_KEY, result);
        navigation.navigate(Routes.Home);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Login screen Updated 4 </Text>
      <Button title="Login" onPress={loginHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {padding: 20, fontSize: 30},
});

export default Login;
