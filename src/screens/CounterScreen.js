import React, { useReducer } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { count: state.count + action.payload };
    case "decrease":
      return { count: state.count - action.payload };
  }
};

export default function CounterScreen() {
  // const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <View>
      <Button title="Increase" onPress={() => dispatch({ type: "increase", payload: 4 })} />
      <Button title="Decrease" onPress={() => dispatch({ type: "decrease", payload: 4 })} />
      <Text>Current Count: {state.count}</Text>
    </View>
  );
}

// {type: "increase", payload: 12}

const styles = StyleSheet.create({});
