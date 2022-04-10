import React, { useReducer } from "react";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 10;

const reducer = (state, action) => {
  switch (action.type) {
    case "change_red":
    case "change_green":
    case "change_blue":
      const colorToChange = action.type.replace("change_", "");
      return state[colorToChange] + action.payload > 255 ||
        state[colorToChange] + action.payload < 0
        ? state
        : { ...state, [colorToChange]: state[colorToChange] + action.payload };
    default:
      return state;
  }
};

export default function SquareScreen() {
  const [state, dispatch] = useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0,
  });

  const increase = (color) => dispatch({ type: `change_${color}`, payload: COLOR_INCREMENT });
  const decrease = (color) => dispatch({ type: `change_${color}`, payload: -1 * COLOR_INCREMENT });

  return (
    <View>
      <ColorCounter onIncrease={increase} onDecrease={decrease} color="red" />
      <ColorCounter onIncrease={increase} onDecrease={decrease} color="blue" />
      <ColorCounter onIncrease={increase} onDecrease={decrease} color="green" />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
