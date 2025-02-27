import { useEffect, useRef } from "react";
import { View, StyleSheet, Animated } from "react-native";

const TodoSkeleton = () => {
  const shimmerAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(shimmerAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(shimmerAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [shimmerAnim]);

  const shimmerStyle = {
    opacity: shimmerAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [0.5, 1],
    }),
  };

  return (
    <View style={styles.container}>
      {[...Array(12)].map((_, index) => (
        <View key={index} style={styles.todoItem}>
          <Animated.View style={[styles.todoPlaceholder, shimmerStyle]} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  todoItem: {
    marginHorizontal: 8,
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 8,
    height: 50,
  },
  todoPlaceholder: {
    flex: 1,
    height: "100%",
    backgroundColor: "#e0e0e0",
    borderRadius: 4,
  },
});

export default TodoSkeleton;
