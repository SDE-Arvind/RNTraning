import AsyncStorage from '@react-native-async-storage/async-storage';

export const storage = {
  // Save a value to storage
  setItem: async (key: string, value: any): Promise<void> => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (error) {
      console.error('Error saving data to AsyncStorage', error);
      throw error;
    }
  },

  // Get a value from storage
  getItem: async (key: string): Promise<any | null> => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.error('Error retrieving data from AsyncStorage', error);
      throw error;
    }
  },

};
