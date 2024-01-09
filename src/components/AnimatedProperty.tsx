import { Animated, Button, StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";

const AnimatedProperty = () => {
  const heightAnim = useRef(new Animated.Value(100)).current;

  const onPressBtn = () => {
    Animated.timing(heightAnim, {
      toValue: 200,
      useNativeDriver: false,
    }).start();
  };

  const backgroundInterploated = heightAnim.interpolate({
    // input값이 100에서 200이 될때,
    // output값이 [0]에서 [1]으로 변하게 된다
    inputRange: [100, 200],
    outputRange: ["orange", "red"],
  });
  return (
    <>
      <Button title="트리거" onPress={onPressBtn} />
      <Animated.Text
        style={{
          fontSize: 70,
          backgroundColor: backgroundInterploated,
          height: heightAnim,
        }}
      >
        value
      </Animated.Text>
    </>
  );
};

export default AnimatedProperty;

const styles = StyleSheet.create({});
