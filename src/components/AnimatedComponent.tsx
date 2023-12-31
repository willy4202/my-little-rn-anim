import { Animated, Button, StyleSheet } from "react-native";
import React, { useRef } from "react";

const AnimatedComponent = () => {
  const opacityAnim = useRef(new Animated.Value(1)).current;
  const onPressBtn = () => {
    Animated.timing(opacityAnim, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  return (
    <>
      <Button title="트리거" onPress={onPressBtn} />
      <Animated.Text style={{ fontSize: 70, opacity: opacityAnim }}>
        안녕
      </Animated.Text>
    </>
  );
};

export default AnimatedComponent;

const styles = StyleSheet.create({});
