import { Animated, Button, StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";

const AnimatedProperty = () => {
  const heightAnim = useRef(new Animated.Value(100)).current;

  const onPressBtn = () => {
    Animated.timing(heightAnim, {
      toValue: 200,
      useNativeDriver: true,
    }).start();
  };
  return (
    <>
      <Button title="트리거" onPress={onPressBtn} />
      <Animated.Text
        style={{ fontSize: 70, backgroundColor: "orange", height: heightAnim }}
      >
        value
      </Animated.Text>
    </>
  );
};

export default AnimatedProperty;

const styles = StyleSheet.create({});
