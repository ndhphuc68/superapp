import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import {
  HStack,
  Avatar,
  VStack,
  Collapse,
  Center,
  Box,
  Square,
  Flex,
} from "native-base";
import { Ionicons, Feather } from "@expo/vector-icons";
import { Colors } from "../../theme/colors";
import { Images } from "../../theme/image";
import { menu } from "./data";
import { useNavigation } from "@react-navigation/core";

const { width, height } = Dimensions.get("window");

export default function HomeView() {
  const navigation = useNavigation();

  const renderHeaderHome = () => {
    return (
      <HStack alignItems={"center"} space={5} marginTop={10}>
        <Avatar
          size="xl"
          bg="green.500"
          source={require("../../assets/images/happy.png")}
        >
          Avatar
        </Avatar>
        <VStack space={1}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Nguyen Dang Hoang Phuc
          </Text>
          <HStack alignItems={"center"}>
            <Ionicons name="location-sharp" size={16} color="black" />
            <Text
              style={{
                fontSize: 12,
                fontWeight: "500",
                color: Colors.neutral60,
              }}
            >
              Da Nang
            </Text>
          </HStack>
        </VStack>
      </HStack>
    );
  };

  const renderBodyHome = () => {
    return (
      <VStack marginTop={8}>
        <Text style={{ fontSize: 35, fontWeight: "bold" }}>Welcome back!</Text>
        <FlatList
          style={{ marginVertical: 10 }}
          data={menu}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate(item.screen)}
              style={[
                styles.itemMenu,
                styles.elevation,
                { backgroundColor: item.color },
              ]}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {item.icon}
                <Text style={{ marginTop: 5 }}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index}
        />
      </VStack>
    );
  };

  return (
    <View style={styles.container}>
      {renderHeaderHome()}
      {renderBodyHome()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  elevation: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  itemMenu: {
    height: (width - 45) / 2,
    flex: 1,
    margin: 5,
  },
});
