import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Avatar, HStack, Input, VStack } from "native-base";
import { Feather } from "@expo/vector-icons";
import { getListMessage, sendMessage } from "../../helper/modules/message";
import { useNavigation } from "@react-navigation/core";
import { getUsername } from "../../utils/storage";
import { BASE_URL_IMAGE } from "../../constants";

const { width, height } = Dimensions.get("window");

export default function SendMessage({ route }) {
  const DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 18, 16, 17, 19];

  const { name, toUser, image } = route.params;

  const [listMessage, setListMessage] = useState(null);
  const [messageSend, setMessageSend] = useState("");

  useEffect(() => {
    handleGetListMessage();
  }, []);

  const handleGetListMessage = async () => {
    const usename = await getUsername();
    await getListMessage({ username: usename, toUser: toUser }).then((res) => {
      if (res && res.success) {
        setListMessage(res.data);
      }
    });
  };

  const handleSendMessage = async () => {
    if (messageSend) {
      const username = await getUsername();
      await sendMessage({
        username,
        toUser: toUser,
        message: messageSend,
      }).then((res) => {
        if (res.success) {
          handleGetListMessage();
          setMessageSend("");
        }
      });
    }
  };

  const compareTimes = (time1, time2) => {
    const difference = Math.abs(new Date(time1) - new Date(time2));
    const minutes = Math.floor(difference / 60000);
    return minutes < 2;
  };

  const renderMessageMe = (item) => {
    const { message } = item;
    return (
      <HStack marginBottom={3} alignItems={"flex-end"} space={2}>
        <Avatar
          size="sm"
          bg="green.500"
          source={
            image
              ? { uri: BASE_URL_IMAGE + `${image}` }
              : require("../../assets/images/happy.png")
          }
        >
          AJ
        </Avatar>
        <VStack space={1}>
          <View style={styles.message}>
            <Text>{message}</Text>
          </View>
        </VStack>
      </HStack>
    );
  };

  const renderMessageUser = (item, index) => {
    const { message, createdAt } = item;
    return (
      <HStack
        marginBottom={3}
        justifyContent={"flex-start"}
        flexDirection={"row-reverse"}
        alignItems={"flex-end"}
        space={2}
      >
        {/* <Avatar
          size="sm"
          bg="green.500"
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
        >
          AJ
        </Avatar> */}
        <VStack space={1}>
          <View style={styles.message}>
            <Text>{message}</Text>
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
            paddingHorizontal: 10,
            width: width,
            flexDirection: "column-reverse",
          }}
        >
          {listMessage ? (
            listMessage.map((e, index) => {
              if (e.username !== toUser) {
                return <View key={index}>{renderMessageUser(e, index)}</View>;
              } else {
                return <View key={index}>{renderMessageMe(e, index)}</View>;
              }
            })
          ) : (
            <></>
          )}
        </View>
        <HStack marginBottom={5} marginTop={5} justifyContent={"center"}>
          <Avatar
            bg="green.500"
            alignSelf="center"
            size="xl"
            source={
              image
                ? { uri: BASE_URL_IMAGE + `${image}` }
                : require("../../assets/images/happy.png")
            }
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
          <Input
            value={messageSend}
            onChangeText={setMessageSend}
            backgroundColor={"white"}
            fontSize={18}
            w={"3/4"}
          />
          <TouchableOpacity onPress={() => handleSendMessage()}>
            <Feather name="send" size={32} color="black" />
          </TouchableOpacity>
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
