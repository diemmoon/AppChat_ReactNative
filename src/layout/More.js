import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
} from "react-native";
import Menu from "../components/Menu";
import img1 from "../../assets/img/khunglong.jpg";
import img2 from "../../assets/img/girl.jpg";
import img3 from "../../assets/img/rabit.jpg";
import Search from "../components/Search";
import { styles } from "../styles/styleMore";
import User from "../components/User";

export default function More({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Search />
        </View>
      </View>
      <ScrollView style={styles.listChat}>
        <User
          image={img1}
          name="Khủng long"
          message="Bấm để xem trang cá nhân"
          onPress={() => navigation.navigate("UserInfo")}
        />
      </ScrollView>
      <View style={styles.footer}>
        <Menu
          onPressChat={() => navigation.navigate("Chat")}
          onPressAddGroup={() => navigation.navigate("AddGroup")}
        />
      </View>
    </SafeAreaView>
  );
}
