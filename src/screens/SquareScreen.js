import React, { useState } from "react";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 10;

export default function SquareScreen() {
  const [colors, setColors] = useState({
    red: 0,
    green: 0,
    blue: 0,
  });

  const increase = (color) =>
    colors[color] + COLOR_INCREMENT > 255 || colors[color] + COLOR_INCREMENT < 0
      ? null
      : setColors({ ...colors, [color]: colors[color] + COLOR_INCREMENT });
  const decrease = (color) =>
    colors[color] + COLOR_INCREMENT > 255 || colors[color] + COLOR_INCREMENT < 0
      ? null
      : setColors({ ...colors, [color]: colors[color] - COLOR_INCREMENT });

  return (
    <View>
      <ColorCounter onIncrease={increase} onDecrease={decrease} color="red" />
      <ColorCounter onIncrease={increase} onDecrease={decrease} color="blue" />
      <ColorCounter onIncrease={increase} onDecrease={decrease} color="green" />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${colors.red}, ${colors.green}, ${colors.blue})`,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
