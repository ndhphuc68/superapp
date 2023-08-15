import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { HStack, Input } from "native-base";
import { Feather } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export default function SendMessage() {
  return (
    <View style={styles.container}>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: width,
          backgroundColor: "white",
          paddingHorizontal: 5,
          paddingVertical: 10,
        }}
      >
        <HStack
          w={"full"}
          space={3}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Input fontSize={18} w={"3/4"} />
          <Feather name="send" size={32} color="black" />
        </HStack>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    position: "relative",
  },
});
