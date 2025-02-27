import { useAppDispatch, useAppSelector } from "@/src/store";
import { View, StyleSheet, FlatList, Pressable, Text } from "react-native";
import { completeTodo, removeTodo, selectTodos } from "./todosSlice";
import AddTodosInput from "./AddTodosInput";
import { useEffect, useMemo, useState } from "react";
import Animated, { LinearTransition } from "react-native-reanimated";
import TodoSkeleton from "./TodoSkeleton";

export default function Todos() {
  const [isLoading, setIsLoading] = useState(true);
  const todos = useAppSelector(selectTodos);
  const incompleteTodosCount = useMemo(
    () => todos.filter((todo) => !todo.completed).length,
    [todos],
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3-second delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <AddTodosInput />
      <Text style={styles.todoCountText}>
        {isLoading || todos.length === 0
          ? "No todos yet"
          : `You've ${incompleteTodosCount} incomplete todos`}
      </Text>

      {isLoading ? (
        <TodoSkeleton />
      ) : (
        <FlatList
          style={styles.todosContainer}
          data={todos}
          renderItem={({ item }) => <TodoItem todo={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
}

function TodoItem({ todo }: { todo: Todo }) {
  const dispatch = useAppDispatch();

  return (
    <Animated.View layout={LinearTransition}>
      <Pressable
        style={styles.todoItemContainer}
        onPress={() => dispatch(completeTodo(todo.id))}
      >
        <Text style={todo.completed ? styles.completed : styles.todoTitle}>
          {todo.title}
        </Text>

        <Text>Completed: {todo.completed ? "✅" : "❌"}</Text>

        <Pressable onPress={() => dispatch(removeTodo(todo.id))}>
          <Text style={styles.todoDeleteButtonText}>Delete</Text>
        </Pressable>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  todoCountText: {
    fontSize: 16,
    alignSelf: "center",
    marginTop: 8,
  },
  todosContainer: {
    marginVertical: 16,
  },
  todoItemContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 0.84,
    elevation: 2,

    marginHorizontal: 8,
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 8,
    height: 50,
  },
  todoTitle: {
    fontSize: 16,
    fontWeight: "bold",
    width: "45%",
  },
  completed: {
    fontSize: 16,
    fontWeight: "bold",
    width: "45%",
    textDecorationLine: "line-through",
  },
  todoDeleteButtonText: {
    color: "red",
  },
});
