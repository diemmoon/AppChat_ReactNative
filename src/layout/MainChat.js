import React from "react";
import { SafeAreaView, View } from "react-native";
import Search from "../components/Search";
import { styles } from "../styles/styles";

export default function MainChat() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Search />
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
