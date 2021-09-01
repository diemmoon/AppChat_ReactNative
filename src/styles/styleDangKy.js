import { Dimensions, StyleSheet } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const TEXT = {
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
};
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2c9d4",
    alignItems: "center",
  },
  content: {
    // backgroundColor: "pink",
    padding: 20,
  },
  header: {
    backgroundColor: "#3399cc",
    height: 90,
    width: windowWidth,
    alignItems: "center",
  },
  textHeader: {
    ...TEXT,
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    padding: 50,
  },
  formGroup: {
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    backgroundColor: "#ddd",
    height: 40,
    borderRadius: 15,
  },
  label: {
    marginBottom: 5,
  },
  button: {
    backgroundColor: "#3399cc",
    height: 60,
    width: (windowWidth * 90) / 100,
    borderRadius: 20,
  },
  textButton: {
    ...TEXT,
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    padding: 16,
  },
});
