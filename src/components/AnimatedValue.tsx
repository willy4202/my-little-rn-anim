import { Animated, Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";

const AnimatedValue = () => {
  const translateAnim = useRef(new Animated.Value(-100)).current;
  const onPressBtn = () => {
    translateAnim.setValue(-100);
    translateAnim.addListener((value) => console.log(value));
    Animated.timing(translateAnim, {
      toValue: 100,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    translateAnim.removeAllListeners();
  });

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

export default AnimatedValue;

const styles = StyleSheet.create({});

/** Value의 종류
 *
 * setValue(); value를 강제로 설정함, 이를 이용하면 매번 초기값부터 애니메이션을 실행시킬 수 있음
 * addListener: 애니메이션이 실행되는 동안 리스너를 추가할 수 있음
 * removeAllListeners: 모든 리스너를 제거함 (메모리 누수 예방에 좋음)
 *
 * resetAnimation
 * setOffset : value에 추가된 값을 설정할 수 있는 메서드 (제스처를 사용하는 곳에 사용하면 체감이 됨)
 *
 *
 */
