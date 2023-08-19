import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveToken = async (value) => {
  try {
    await AsyncStorage.setItem("token", value);
  } catch (error) {}
};

export const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem("token");
    if (value !== null) {
      return value;
    } else {
      return null;
    }
  } catch (e) {
    // error reading value
  }
};

export const removeToken = async () => {
  try {
    await AsyncStorage.removeItem("token");
  } catch (e) {
    // error reading value
  }
};
