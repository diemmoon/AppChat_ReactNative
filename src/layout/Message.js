import { AntDesign, Entypo, Feather, Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import img1 from "../../assets/img/khunglong.jpg";
import MiniMessage from "../components/MiniMessage";
import User from "../components/User2";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Message({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Ionicons
            name="arrow-back-outline"
            size={26}
            color="white"
            onPress={() => navigation.navigate("Chat")}
          />
          <View style={styles.userView}>
            <User image={img1} name="Khủng long" message="Đang hoạt động" />
          </View>
          <AntDesign name="addusergroup" size={26} color="white" />
          <Ionicons name="call" size={26} color="white" />
          <Feather name="more-horizontal" size={26} color="white" />
        </View>
        <View style={styles.listMessage}>
          <MiniMessage
            image={img1}
            message="Đang làm gì đó??"
            name="Khủng long"
          />
          <MiniMessage
            image={img1}
            message="Đang làm gì đó??"
            name="Khủng long"
          />
          <MiniMessage
            image={img1}
            message="Đang làm gì đó??"
            name="Khủng long"
          />
        </View>
        <View style={styles.footer}>
          <Entypo name="emoji-happy" size={50} color="#3399cc" />
          <TextInput
            style={styles.input}
            placeholder="Nhập tin nhắn"
            autoFocus={true}
          />
          <Entypo name="image-inverted" size={30} color="#3399cc" />
          <Feather name="more-horizontal" size={30} color="#3399cc" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const CENTER = {
  textAlign: "center",
  justifyContent: "center",
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3399cc",
  },
  content: {
    flex: 1,
    marginTop: (windowHeight * 3) / 100,
  },
  header: {
    backgroundColor: "#3399cc",
    width: "100%",
    height: (windowHeight * 12) / 100,
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  listMessage: {
    paddingVertical: 10,
    backgroundColor: "#f2c9d4",
    width: "100%",
    height: (windowHeight * 75) / 100,
  },
  footer: {
    backgroundColor: "#fff",
    width: "100%",
    height: (windowHeight * 10) / 100,
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign: "center",
    alignItems: "center",
  },
  userView: {
    paddingTop: 10,
    maxWidth: (windowWidth * 70) / 100,
  },
  input: {
    height: "100%",
    width: "60%",
    // marginTop: 30,

    color: "black",
    paddingLeft: 20,
  },
});
