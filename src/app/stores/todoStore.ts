import axios from "axios";
import { create } from "zustand";

type TodoStore = {
  inputText: string;
  setInputText: (text: string) => void;
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
  editedTodo: Todo | null;
  setEditedTodo: (todo: Todo | null) => void;
  editMode: boolean;
  setEditMode: (mode: boolean) => void;
  addTodo: () => void;
  clearTodos: () => void;
  handleCheckboxChange: (todoId: string, completed: boolean) => void;
  deleteTodo: (todoId: string) => void;
  updateTodo: () => void;
};

export const useTodoStore = create<TodoStore>((set) => ({
  inputText: "",
  setInputText: (text: string) => set({ inputText: text }),

  todos: [],
  setTodos: (todos: Todo[]) => set({ todos }),

  editedTodo: null,
  setEditedTodo: (todo: Todo | null) => set({ editedTodo: todo }),
  editMode: false,
  setEditMode: (mode: boolean) => set({ editMode: mode }),
  
  addTodo: async () => {
    const data = {
      desc: useTodoStore.getState().inputText,
    };
    try {
      const resp = await axios.post("/api/todos", data);
      const newTodo = resp.data.saveTodo;
      set((state) => ({
        todos: [newTodo, ...state.todos],
        inputText: "",
      }));
      
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  },
  clearTodos: async () => {
    try {
      await axios.delete("api/todos");
      set({ todos: [] });
    } catch (error) {
      console.error("Error clearing todos:", error);
    }
  },
  handleCheckboxChange: async (todoId, completed) => {
    try {
      await axios.put(`/api/todos/${todoId}`, { completed });
      set((state) => ({
        todos: state.todos.map((todo) =>
          todo.id === todoId ? { ...todo, completed } : todo
        ),
      }));
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  },
  deleteTodo: async (todoId) => {
    try {
      await axios.delete(`api/todos/${todoId}`);
      set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== todoId),
      }));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  },
  updateTodo: async () => {
    try {
      const { editedTodo } = useTodoStore.getState();
      if (editedTodo) {
        await axios.put(`/api/todos/${editedTodo.id}`, editedTodo);
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === editedTodo.id ? editedTodo : todo
          ),
          editedTodo: null,
        }));
      }
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  },
}));
