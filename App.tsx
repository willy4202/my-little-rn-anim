import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Snackbar from "./src/chapter3/Snackbar";
import PanResponderIntro from "./src/chapter3/PanResponder";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={styles.container}>
      {/* <Snackbar /> */}
      <PanResponderIntro />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
