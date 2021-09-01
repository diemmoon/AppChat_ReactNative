import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  TextInput,
  View,
} from "react-native";
import Menu from "../components/Menu";
import User from "../components/User";
import { styles } from "../styles/stylesAddGroup";

export default function AddGroup({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text>aaaaaaaaaaaaa</Text>
        <View style={styles.search}>
          <FontAwesome5
            name="search"
            size={20}
            color="grey"
            style={styles.icon}
          />
          <TextInput style={styles.txtSearch} placeholder="Search" />
        </View>
        <ScrollView style={styles.listChat}>
          <User />
          <User />
          <User />

          <User />
        </ScrollView>
        <View>
          <Menu />
        </View>
      </View>
    </SafeAreaView>
  );
}
