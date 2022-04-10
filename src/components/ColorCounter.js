import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function ColorCounter({ color, onIncrease, onDecrease }) {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`Increase ${color}`} onPress={() => onIncrease(color)} />
      <Button title={`Decrease ${color}`} onPress={() => onDecrease(color)} />
    </View>
  );
}

const styles = StyleSheet.create({});
