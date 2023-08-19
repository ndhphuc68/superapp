import { Image, StyleSheet, Text, View, Keyboard } from "react-native";
import React, { useEffect, useState } from "react";
import { Images } from "../../theme/image";
import { VStack, Input, Icon, Pressable, Button } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "../../theme/colors";
import { useDispatch } from "react-redux";
import auth, { authV1 } from "../../redux/modules/auth";
import { useNavigation } from "@react-navigation/core";
import { ScreenName } from "../../routes/modules/ScreenName";
import messaging from "@react-native-firebase/messaging";

export default function LoginView() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [show, setShow] = useState();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    messaging()
      .getToken()
      .then((token) => {
        console.log(token);
      });
  }, []);

  const handleLogin = () => {
    Keyboard.dismiss();
    setIsLoading(false);
    if (username && password) {
      dispatch(authV1.actions.setAuth(true));
      navigation.navigate(ScreenName.bottomtab);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.imageLogo}
        source={Images.dog}
        resizeMode="contain"
      />
      <VStack marginTop={8} space={8} width={"100%"}>
        <Input
          focusOutlineColor={Colors.neutral60}
          size="xl"
          variant="underlined"
          placeholder="Username"
          placeholderTextColor={Colors.black}
          style={{ fontWeight: "bold" }}
          value={username}
          onChangeText={setUsername}
        />
        <Input
          value={password}
          onChangeText={setPassword}
          placeholderTextColor={Colors.black}
          style={{ fontWeight: "bold" }}
          focusOutlineColor={Colors.neutral60}
          size="xl"
          variant="underlined"
          placeholder="Password"
          type={show ? "text" : "password"}
          InputRightElement={
            <Pressable onPress={() => setShow(!show)}>
              <Icon
                as={
                  <MaterialIcons
                    name={show ? "visibility" : "visibility-off"}
                  />
                }
                size={5}
                mr="2"
                color="muted.400"
              />
            </Pressable>
          }
        />
        <Button
          isLoading={isLoading}
          onPress={handleLogin}
          height={60}
          style={{ backgroundColor: Colors.blue }}
        >
          <Text
            style={{ fontWeight: "bold", color: Colors.white, fontSize: 18 }}
          >
            Login
          </Text>
        </Button>
      </VStack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  imageLogo: {
    height: 250,
    width: 250,
  },
});
