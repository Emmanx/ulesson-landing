import AsyncStorage from '@react-native-community/async-storage';

export const storeItem = async (key: any, item: any) => {
  try {
    return await AsyncStorage.setItem(key, JSON.stringify(item));
  } catch (error: any) {
    console.log(error.message);
  }
};

export const retrieveItem = async (key: any) => {
  try {
    const retrievedItem = await AsyncStorage.getItem(key);
    return JSON.parse(<string>retrievedItem);
  } catch (error: any) {
    console.log(error.message);
  }
  return null;
};

export const removeItem = async (key: any) => {
  try {
    const removeItem = await AsyncStorage.removeItem(key);
    return removeItem + ' was removed!';
  } catch (error: any) {
    console.log(error.message);
  }
  return null;
};