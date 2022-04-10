import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";

export default function TextScreen() {
  const [text, setText] = useState("");

  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={text}
        onChangeText={setText}
      />
      {text.length < 5 ? (
        <Text style={styles.error}>Password must be at least 5 characters</Text>
      ) : undefined}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
  error: {
    color: "red",
  },
});
