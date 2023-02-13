import { Dimensions, Text, View, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export const TodoList = () => {
  return (
    <View>
      <Text>Todo's</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width - 50,
  },
});
