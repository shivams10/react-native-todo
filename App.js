import { useState } from "react";
import {
  Dimensions,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { TodoList } from "./src/components/TodoList";

const { width } = Dimensions.get("window");

export default function App() {
  const [todo, setText] = useState("");
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.appTitle}>Work List</Text>
      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="add item"
          value={todo}
          onChangeText={(newText) => setText(newText)}
          returnKeyType={"done"}
          autoCorrect={false}
        />
        <ScrollView>
          <TodoList />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#11998e",
  },
  appTitle: {
    color: "#fff",
    fontSize: 36,
    marginTop: 60,
    marginBottom: 30,
    fontWeight: "300",
  },
  card: {
    backgroundColor: "#fff",
    flex: 1,
    width: width - 25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: "rgb(50,50,50)",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: -1,
          width: 0,
        },
      },
      android: {
        elevation: 5,
      },
    }),
  },
  input: {
    padding: 20,
    borderBottomColor: "#11998e",
    borderBottomWidth: 1,
    fontSize: 24,
  },
});
