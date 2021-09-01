import React from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import { Dimensions } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default function Menu({ onPress }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.iconView}>
        <FontAwesome name="wechat" size={30} color="#3399cc" />
        <Text style={styles.txt}> Chat</Text>
      </View>
      <View style={styles.iconView}>
        <MaterialCommunityIcons
          name="account-group"
          size={30}
          color="#3399cc"
          onPress={onPress}
        />
        <Text style={styles.txt}> Group</Text>
      </View>
      <View style={styles.iconView}>
        <Entypo name="menu" size={30} color="#3399cc" />
        <Text style={styles.txt}> More</Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderTopColor: "#1995ad",
    width: "100%",
    height: (windowHeight * 10) / 100,

    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  iconView: {
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    color: "#3399cc",
  },
});
