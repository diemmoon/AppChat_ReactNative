import { FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
} from "react-native";
import { AntDesign, Entypo, Feather, Ionicons } from "@expo/vector-icons";

import Menu from "../components/Menu";
import User from "../components/User";
import Search from "../components/Search";
import img1 from "../../assets/img/khunglong.jpg";
import img2 from "../../assets/img/girl.jpg";
import img3 from "../../assets/img/rabit.jpg";
import { styles } from "../styles/styleUserInfor";

export default function UserInfo({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Ionicons
            name="arrow-back-outline"
            size={26}
            color="black"
            onPress={() => navigation.navigate("More")}
          />
        </View>
        <ScrollView style={styles.chitiet}>
          <View style={styles.view1}>
            <Text>sss</Text>
          </View>
          <View style={styles.view2}></View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
