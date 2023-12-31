import { Animated, Button, Easing, StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";

const AnimatedSpring = () => {
  const translateAnim = useRef(new Animated.Value(-100)).current;
  const onPressBtn = () => {
    translateAnim.setValue(-100);

    Animated.timing(translateAnim, {
      toValue: 100,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  };
  return (
    <>
      <Button title="트리거" onPress={onPressBtn} />
      <Animated.Text
        style={{ fontSize: 70, transform: [{ translateX: translateAnim }] }}
      >
        value
      </Animated.Text>
    </>
  );
};

export default AnimatedSpring;

const styles = StyleSheet.create({});
