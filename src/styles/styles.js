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
  search: {
    height: 40,
    width: (windowWidth * 95) / 100,
    backgroundColor: "#ddd",
    marginTop: 5,
    // marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 20,
    flexDirection: "row",
  },
  txtSearch: {
    marginLeft: 30,
    width: "80%",
    position: "relative",
    paddingLeft: 10,
  },
  icon: {
    position: "absolute",
    left: 20,
    top: 10,
  },

  listChat: {
    height: (windowHeight * 75) / 100,
    minHeight: (windowHeight * 75) / 100,
    marginTop: 20,
  },
});
