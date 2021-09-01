import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { TextInput, View } from "react-native";
import { styles } from "../styles/styles";
export default function Search() {
  return (
    <View style={styles.search}>
      <FontAwesome5 name="search" size={20} color="grey" style={styles.icon} />
      <TextInput style={styles.txtSearch} placeholder="Search" />
    </View>
  );
}
