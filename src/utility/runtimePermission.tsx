import {PermissionsAndroid} from 'react-native';

export const requestWriteStoragePermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'Need Device storage write permission to store data',
        message: 'NA ',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the storage');
    } else {
      console.log('storage permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

export const requestNotificationPermission = async (
  successCallback: any,
  failureCallback: any,
) => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      {
        title: 'Request for Notification',
        message: 'This app needs notification permission.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      successCallback();
    } else {
      failureCallback();
    }
  } catch (err) {
    failureCallback(err);
  }
};
