import { FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  TextInput,
  View,
} from "react-native";
import { styles } from "../styles/styles";
import Menu from "../components/Menu";
import User from "../components/User";
import Search from "../components/Search";
import img1 from "../../assets/img/khunglong.jpg";
import img2 from "../../assets/img/girl.jpg";
import img3 from "../../assets/img/rabit.jpg";

export default function Chat({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Search />
        <ScrollView style={styles.listChat}>
          <User
            image={img1}
            name="Khủng long"
            message="Xin chào"
            onPress={() => navigation.navigate("Message")}
          />

          <User
            image={img2}
            name="Diem Moon"
            message="Xin chào"
            onPress={() => navigation.navigate("Message")}
          />
          <User
            image={img3}
            name="Thỏ con"
            message="Xin chào"
            onPress={() => navigation.navigate("Message")}
          />
        </ScrollView>
        <View>
          <Menu
            onPressAddGroup={() => navigation.navigate("AddGroup")}
            onPressMore={() => navigation.navigate("More")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
