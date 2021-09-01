import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
const CENTER = {
  textAlign: "center",
  justifyContent: "center",
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2c9d4",
  },
  content: {
    padding: 10,
    flex: 1,
    paddingTop: 30,
  },
  header: {
    marginBottom: 5,
  },
  view1: {
    backgroundColor: "red",
    width: "100%",
    height: "50%",
  },
});
