import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default function ComponentsScreen() {
  const myName = "Mike";

  return (
    <View>
      <Text style={styles.textStyle}>Getting started with react native!</Text>
      <Text style={styles.greeting}>My name is {myName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  greeting: {
    fontSize: 20,
  },
});
