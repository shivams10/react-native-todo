import { useState } from "react";
import {
  Dimensions,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";

const { width } = Dimensions.get("window");

export const TodoList = (props) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [todoValue, setTodoValue] = useState("");

  const toggleItem = () => {
    return setIsCompleted(!isCompleted);
  };

  const startEditing = () => {
    const { textValue } = props;
    setIsEditing(true);
    setTodoValue(textValue);
  };

  const finishEditing = () => {
    setIsEditing(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <TouchableOpacity onPress={toggleItem}>
          <View
            style={[
              styles.circle,
              isCompleted ? styles.completeCircle : styles.incompleteCircle,
            ]}
          />
        </TouchableOpacity>
        <Text
          style={
            (styles.text, isCompleted ? styles.strikeText : styles.unstrikeText)
          }
        >
          {props.textValue}
        </Text>
      </View>
      {isEditing ? (
        <View style={styles.buttons}>
          <TouchableOpacity onPressOut={finishEditing}>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>✅</Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.buttons}>
          <TouchableOpacity onPressOut={startEditing}>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>✏️</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>❌</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width - 50,
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontWeight: "500",
    fontSize: 18,
    marginVertical: 20,
  },
  circle: {
    width: 25,
    height: 25,
    borderRadius: 15,
    borderWidth: 3,
    margin: 10,
  },
  completeCircle: {
    borderColor: "#bbb",
  },
  incompleteCircle: {
    borderColor: "#DA4453",
  },
  strikeText: {
    color: "#bbb",
    textDecorationLine: "line-through",
  },
  unstrikeText: {
    color: "#29323c",
  },
  rowContainer: {
    flexDirection: "row",
    width: width / 2,
    alignItems: "center",
  },
  buttons: {
    flexDirection: "row",
  },
  buttonContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
});
