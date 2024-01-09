import {
  Animated,
  Button,
  Easing,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useRef } from "react";

const Snackbar = () => {
  const snackBarAnim = useRef(new Animated.Value(100)).current;

  const onPress = () => {
    Animated.sequence([
      Animated.timing(snackBarAnim, {
        toValue: 0,
        duration: 300,
        easing: Easing.out(Easing.circle),
        useNativeDriver: true,
      }),
      Animated.delay(1500),
      Animated.timing(snackBarAnim, {
        toValue: 100,
        duration: 300,
        easing: Easing.in(Easing.circle),
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Button title="스낵바 오픈" onPress={onPress} />
      <Animated.View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          transform: [{ translateY: snackBarAnim }],
        }}
      >
        <View
          style={{
            backgroundColor: "#222",
            flexDirection: "row",
            paddingHorizontal: 20,
            paddingVertical: 14,
            margin: 14,
            borderRadius: 4,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white" }}>ICON</Text>
          <Text style={{ color: "white" }}>오류가 발견됐습니다</Text>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};

export default Snackbar;

const styles = StyleSheet.create({});
