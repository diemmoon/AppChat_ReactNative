import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
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
    flex: 1,
  },
  header: {
    paddingTop: 20,
    height: "10%",
    width: "100%",
    backgroundColor: "#f2c9d4",
    alignItems: "center",
  },

  listChat: {
    height: "70%",
    minHeight: (windowHeight * 70) / 100,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  txtTaoNhom: {
    color: "white",
    marginLeft: 10,
    fontSize: 17,
  },
  iconAddGroupView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    fontSize: 17,
    fontWeight: "bold",
    paddingBottom: 10,
  },
});
