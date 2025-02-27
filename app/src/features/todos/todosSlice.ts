import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/src/store";

interface TodosState {
  value: Todo[];
}

const initialState: TodosState = {
  value: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.value.push({
        //  NOTE: in a real app this should be a server generated id or at least not a numeric value
        id: Date.now(),
        title: action.payload,
        completed: false,
      });
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.value = state.value.filter((todo) => todo.id !== action.payload);
    },
    completeTodo: (state, action: PayloadAction<number>) => {
      state.value = state.value.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    },
  },
});

export const { addTodo, removeTodo, completeTodo } = todosSlice.actions;

export const selectTodos = (state: RootState) => state.todos.value;

export default todosSlice.reducer;
