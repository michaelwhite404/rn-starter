import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function BoxScreen() {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoStyle} />
      <View style={styles.viewThreeStyle} />
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 500,
  },
  viewOneStyle: {
    backgroundColor: "red",
    height: 100,
    width: 100,
  },
  viewTwoStyle: {
    backgroundColor: "green",
    height: 100,
    width: 100,
    alignSelf: "center",
  },
  viewThreeStyle: {
    backgroundColor: "purple",
    height: 100,
    width: 100,
    position: "absolute",
    right: 0,
  },
});
