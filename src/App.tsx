import React, {useEffect} from 'react';
import {Alert, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from './navigation/RootNavigator';
import {store} from './store/store';
import {Provider} from 'react-redux';
import messaging from '@react-native-firebase/messaging';
import {requestNotificationPermission} from './utility/runtimePermission';
import CodePush from 'react-native-code-push';

function App(): React.JSX.Element {
  useEffect(() => {
    requestNotificationPermission();
    // Get the device token
    const getToken = async () => {
      const token = await messaging().getToken();
      console.log('Device FCM Token:======', token);
    };

    getToken();
    // Listen for incoming messages
    messaging().onMessage(async remoteMessage => {
      console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    });
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});

export default CodePush(App);
