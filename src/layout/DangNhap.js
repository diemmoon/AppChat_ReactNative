import { StatusBar } from "expo-status-bar";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Constants from "expo-constants";
import { FontAwesome } from "@expo/vector-icons";

export default function DangNhap({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.textWrapper}>
          <FontAwesome
            name="user"
            size={70}
            color="#444"
            style={styles.iconUser}
          />
          <Text style={styles.welcome}>MEMBER LOGIN</Text>
        </View>
        <View>
          <FontAwesome5
            name="phone-square"
            size={24}
            color="#444"
            style={styles.iconPhone}
          />
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Nhập số điện thoại"
          />
          <FontAwesome5
            name="lock"
            size={24}
            color="#444"
            style={styles.iconLock}
          />
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            secureTextEntry={true}
            placeholder="Nhập mật khẩu"
          />
          <TouchableOpacity
            style={styles.buttonLogin}
            onPress={() => navigation.navigate("Chat")}
          >
            <Text style={styles.textButtonLogin}>ĐĂNG NHẬP</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.action}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Quên mật khẩu</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("DangKy")}
          >
            <Text style={styles.textButton}>Đăng ký tài khoản</Text>
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const TEXT = {
  color: "black",
  textAlign: "center",
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2c9d4",

    paddingTop: Constants.statusBarHeight,
  },
  content: {
    paddingTop: 30,
  },
  textWrapper: {},
  welcome: {
    ...TEXT,
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 20,
    marginBottom: 20,
    // marginTop: 10,
  },

  input: {
    height: 40,
    marginHorizontal: 20,
    // marginTop: 30,
    marginVertical: 10,

    padding: 10,
    borderRadius: 20,

    backgroundColor: "#fff",
    color: "black",
    paddingLeft: 50,
  },
  buttonLogin: {
    alignItems: "center",
    backgroundColor: "#3399cc",
    padding: 10,
    borderRadius: 20,

    marginHorizontal: 20,
    marginVertical: 13,
  },
  textButtonLogin: {
    color: "#fff",
  },
  textButton: {
    ...TEXT,
    color: "#3366ff",
    fontSize: 16,
    fontStyle: "italic",
  },
  action: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 25,
    marginVertical: 15,
  },
  iconLock: {
    position: "absolute",
    left: 30,
    top: 76,
    zIndex: 10,
  },
  iconPhone: {
    position: "absolute",
    left: 30,
    top: 18,
    zIndex: 10,
  },
  iconUser: {
    textAlign: "center",
    justifyContent: "center",
  },
});
