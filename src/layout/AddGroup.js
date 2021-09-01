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
import User from "../components/User";
import { styles } from "../styles/stylesAddGroup";
import img1 from "../../assets/img/khunglong.jpg";
import img2 from "../../assets/img/girl.jpg";
import img3 from "../../assets/img/rabit.jpg";
import Search from "../components/Search";

export default function AddGroup({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Search />
          <View style={styles.iconAddGroupView}>
            <AntDesign name="addusergroup" size={45} color="#fff" />
            <Text style={styles.txtTaoNhom}>Tạo nhóm mới</Text>
          </View>
        </View>
        <ScrollView style={styles.listChat}>
          <Text style={styles.txt}> Nhóm đang tham gia (20)</Text>
          <User
            image={img1}
            name="Khủng long"
            message="Xin chào"
            onPress={() => navigation.navigate("Message")}
          />
          <User
            image={img1}
            name="Khủng long"
            message="Xin chào"
            onPress={() => navigation.navigate("Message")}
          />
          <User
            image={img1}
            name="Khủng long"
            message="Xin chào"
            onPress={() => navigation.navigate("Message")}
          />
        </ScrollView>
        <View style={styles.footer}>
          <Menu
            onPressChat={() => navigation.navigate("Chat")}
            onPressMore={() => navigation.navigate("More")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
