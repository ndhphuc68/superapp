import { View, Text, StyleSheet, Dimensions, FlatList } from "react-native";
import React from "react";
import { Avatar, HStack, Input, VStack } from "native-base";
import { Feather } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export default function SendMessage() {
  const DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 18, 16, 17, 19];

  const renderMessageMe = () => {
    return (
      <HStack marginBottom={5} alignItems={"flex-end"} space={2}>
        <Avatar
          size="sm"
          bg="green.500"
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
        >
          AJ
        </Avatar>
        <VStack space={1}>
          <View style={styles.message}>
            <Text>1232312312</Text>
          </View>
          <View style={styles.message}>
            <Text>1232312312</Text>
          </View>
          <View style={styles.message}>
            <Text>1232312312</Text>
          </View>
        </VStack>
      </HStack>
    );
  };

  const renderMessageUser = () => {
    return (
      <HStack
        marginBottom={5}
        justifyContent={"flex-start"}
        flexDirection={"row-reverse"}
        alignItems={"flex-end"}
        space={2}
      >
        <Avatar
          size="sm"
          bg="green.500"
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
        >
          AJ
        </Avatar>
        <VStack space={1}>
          <View style={styles.message}>
            <Text>1232312312</Text>
          </View>
          <View style={styles.message}>
            <Text>1232312312</Text>
          </View>
          <View style={styles.message}>
            <Text>1232312312</Text>
          </View>
        </VStack>
      </HStack>
    );
  };

  const renderAvatarHeader = () => {
    return (
      <>
        <View
          style={{
            // position: "absolute",
            // bottom: 90,
            paddingHorizontal: 10,
            width: width,
            // height: height,
            flexDirection: "column-reverse",
          }}
        >
          {DATA.map((e) => {
            if (e % 2 === 0) {
              return renderMessageMe();
            } else {
              return renderMessageUser();
            }
          })}
        </View>
        <HStack marginBottom={5} justifyContent={"center"}>
          <Avatar
            bg="green.500"
            alignSelf="center"
            size="xl"
            source={{
              uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            }}
          >
            AJ
          </Avatar>
        </HStack>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          position: "absolute",
          bottom: 90,
          width: width,
          height: height - 160,
        }}
      >
        <FlatList
          data={[1]}
          inverted={true}
          renderItem={() => renderAvatarHeader()}
        />
      </View>
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
          <Input backgroundColor={"white"} fontSize={18} w={"3/4"} />
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
  message: {
    backgroundColor: "#3197E3",
    padding: 10,
    borderRadius: 20,
  },
});
