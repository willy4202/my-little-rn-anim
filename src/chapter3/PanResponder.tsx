import { PanResponder, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const PanResponderIntro = () => {
  const [status, setStatus] = useState({
    dx: 0, // 터치후 누적거리
    dy: 0,
    moveX: 0, // 제일 최근에 찍힌 좌표(절대좌표)
    moveY: 0,
    vx: 0, // 제스쳐의 속도
    vy: 0,
    x0: 0, // 터치 시작지점
    y0: 0,
  });
  /** Permission method
   * response method
   * handler method
   *
   * 팬리스폰더는 제스쳐를 통해 알 수 있는 정보가 매우 많음
   */

  const panResponder = PanResponder.create({
    // Permission method
    // start를 사용할 것인가를 물어보는 메서드
    onStartShouldSetPanResponder: () => true,
    // move할때를 캐치하겠냐를 물어보는 메서드
    onMoveShouldSetPanResponder: () => true,

    // response method
    // 터치에 대한 응답이 잘됐는지 물어보는 메서드
    onPanResponderGrant: () => {},
    // 터치가 잘 안됐을때 물어보는 메서드
    onPanResponderReject: () => {},

    // handler method
    // 터치액션이 시작됏을때 작동하는 핸들러
    onPanResponderStart: (e, gestureState) => {
      console.log(gestureState);
    },
    onPanResponderMove: (e, gestureState) => {
      setStatus({
        dx: gestureState.dx,
        dy: gestureState.dy,
      });
    },
    onPanResponderEnd: (e, gestureState) => {
      console.log(gestureState);
      //   setStatus(gestureState);
    },
    // 터치 액션이 끝나고 최후에 작동하는 핸들러
    onPanResponderRelease: () => {},
  });

  return (
    <View
      {...panResponder.panHandlers}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffa100",
      }}
    >
      <Text>n 만큼 오른쪽으로 가는 중</Text>
      <Text>n 만큼 아래로 가 </Text>
      <View style={{ position: "absolute", bottom: 70, left: 30 }}>
        <Text>dx: {status.dx}</Text>
        <Text>dy: {status.dy}</Text>
        <Text>moveX: {status.moveX}</Text>
        <Text>moveY: {status.moveY}</Text>
        <Text>vx: {status.vx}</Text>
        <Text>vy: {status.vy}</Text>
        <Text>x0: {status.x0}</Text>
        <Text>y0: {status.y0}</Text>
      </View>
    </View>
  );
};

export default PanResponderIntro;

const styles = StyleSheet.create({});
