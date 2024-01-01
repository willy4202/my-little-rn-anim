import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AnimatedComponent from "./src/components/AnimatedComponent";
import AnimatedValue from "./src/components/AnimatedValue";
import AnimatedTiming from "./src/components/AnimatedTiming";
import AnimatedSpring from "./src/components/AnimatedSpring";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AnimatedComposing from "./src/components/AnimatedComposing";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <View style={styles.container}>
      {/* <AnimatedComponent /> */}
      {/* <AnimatedValue /> */}
      {/* <AnimatedTiming /> */}
      {/* <AnimatedSpring /> */}
      <AnimatedComposing />
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
