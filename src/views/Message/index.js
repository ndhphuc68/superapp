import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import { HStack, VStack, Avatar, Flex } from "native-base";
import { Colors } from "../../theme/colors";

const { width, height } = Dimensions.get("window");

export default function Message() {
  const list = [1, 2, 3, 4, 5, 6];

  const renderItemMessage = () => {
    return (
      <TouchableOpacity>
        <HStack space={3} marginBottom={6} alignItems={"center"}>
          <Avatar
            size="lg"
            bg="green.500"
            source={require("../../assets/images/happy.png")}
          >
            Avatar
          </Avatar>
          <VStack space={1}>
            <HStack
              // backgroundColor={"black"}
              w={width - 120}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                Nguyen Hoang Phuc
              </Text>
              <Text style={{ color: Colors.gray }}>11:11 PM</Text>
            </HStack>
            <Text style={{ fontSize: 14 }}>Nguyen Dang Hoang Phuc</Text>
          </VStack>
        </HStack>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        renderItem={({ item }) => renderItemMessage()}
        keyExtractor={(item) => item}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width: width,
  },
});
