import { useAppDispatch } from "@/src/store";
import { useState } from "react";
import { Pressable, TextInput, View, Text, StyleSheet } from "react-native";
import { addTodo } from "./todosSlice";

export default function AddTodosInput() {
  const [title, setTitle] = useState("");
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Add todo"
        textAlign="center"
        placeholderTextColor="black"
        style={styles.todoInput}
      />
      <Pressable
        onPress={() => {
          if (!title.length) return;
          dispatch(addTodo(title));
          setTitle("");
        }}
        style={styles.todoAddButton}
      >
        <Text style={styles.todoAddButtonTxt}>Add</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginHorizontal: 16,
  },
  todoInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
  },
  todoAddButton: {
    height: 40,
    marginTop: 8,
    padding: 8,
    backgroundColor: "gray",
    borderRadius: 4,
    alignItems: "center",
    marginHorizontal: 8,
  },
  todoAddButtonTxt: {
    color: "white",
    fontSize: 16,
  },
});
