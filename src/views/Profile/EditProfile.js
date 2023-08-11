import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Avatar } from "native-base";
import { Colors } from "../../theme/colors";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

export default function EditProfile() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS === "android") {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== "granted") {
          alert("ko chao nhan");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => pickImage()}>
        <Avatar
          marginTop={5}
          borderColor={Colors.white}
          borderWidth={5}
          size="180px"
          bg="green.500"
          source={
            image ? { uri: image } : require("../../assets/images/happy.png")
          }
        >
          <Avatar.Badge
            justifyContent={"center"}
            alignItems={"center"}
            size={"50px"}
          >
            <MaterialIcons name="edit" size={35} color="white" />
          </Avatar.Badge>
        </Avatar>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
