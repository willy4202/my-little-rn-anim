import { Animated, Button, Easing, StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";

// y축 -100에서 100으로 이동하는 애니메이션
const AnimatedSpring = () => {
  const translateYAnim = useRef(new Animated.Value(-100)).current;
  const onPressBtn = () => {
    translateYAnim.setValue(-100);

    /** 스프링은 아래와 같은 옵션이 있지만,
     * 이 인수들을 한번에 모두 사용하진 않는다.
     *
     * 줄바꿈을 한것처럼 세 그룹으로 사용해야한다.*/
    Animated.spring(translateYAnim, {
      toValue: 100,
      //   bounciness: 8, // 탄력을 제어함
      //   speed: 12, // 애니메이션의 속도

      //   friction: 4, // 에너지를 소비하는 정도
      //   tension: 40, // 얼마나 많은 에너지를 받았는가

      //   stiffness: 100,
      //   damping: 10,
      //   mass: 1,

      velocity: 0,
      useNativeDriver: true,
    }).start();
  };

  return (
    <>
      <Button title="스프링 트리거" onPress={onPressBtn} />
      <Animated.Text
        style={{ fontSize: 70, transform: [{ translateY: translateYAnim }] }}
      >
        value
      </Animated.Text>
    </>
  );
};

export default AnimatedSpring;

const styles = StyleSheet.create({});

/**
 * SPRING
 *
 * toValue : 변화시킬 값
 * speed
 */
