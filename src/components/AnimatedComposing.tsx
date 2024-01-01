import { Animated, Button, StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";

const AnimatedComposing = () => {
  // 아래 두가지 애니메이션을 결합
  // 결합 함수 sequence, delay, paraller, stagger
  // 1)  y-200 >0 으로 움직임
  // 2) x 100 > 0으로 움직임

  const translateXanim = useRef(new Animated.Value(0)).current;
  const translateYanim = useRef(new Animated.Value(-200)).current;

  const onBtnPress = () => {
    Animated.parallel([
      Animated.timing(translateYanim, {
        toValue: 0,
        useNativeDriver: true,
      }),
      Animated.timing(translateXanim, {
        toValue: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };
  return (
    <>
      <Button title="트리거" onPress={onBtnPress} />
      <Animated.Text
        style={{
          fontSize: 70,
          transform: [
            { translateX: translateXanim },
            { translateY: translateYanim },
          ],
        }}
      >
        귤
      </Animated.Text>
    </>
  );
};

export default AnimatedComposing;
