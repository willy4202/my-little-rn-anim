import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AnimatedComponent from "./src/components/AnimatedComponent";
import AnimatedValue from "./src/components/AnimatedValue";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <AnimatedComponent /> */}
      <AnimatedValue />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
