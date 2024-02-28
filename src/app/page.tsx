"use client";
import EditTodo from "@/components/EditTodo";
import TodoInput from "@/components/TodoInput";
import TodoItems from "@/components/TodoItems";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Todos() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editedTodo, setEditedTodo] = useState<Todo | null>(null);
  const [editMode, setEditMode] = useState(false);

  async function addTodo() {
    const data = {
      desc: inputText,
    };
    const resp = await axios.post("/api/todos", data);
    const newTodo = resp.data.saveTodo;

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setInputText("");
  }

  async function clearTodos() {
    const resp = await axios.delete("api/todos");
    setTodos([]);
  }

  async function handleCheckboxChange(todoId: string, completed: boolean) {
    try {
      await axios.put(`/api/todos/${todoId}`, { completed });
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === todoId ? { ...todo, completed } : todo
        )
      );
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  }

  async function deleteTodo(todoId: string) {
    await axios.delete(`api/todos/${todoId}`);
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  }

  async function updateTodo() {
    if (editedTodo) {
      await axios.put(`/api/todos/${editedTodo.id}`, editedTodo);

      setTodos((prevTodos) =>
        prevTodos.map((todo) => (todo.id === editedTodo.id ? editedTodo : todo))
      );
      setEditedTodo(null);
    }
  }

  useEffect(() => {
    axios.get("/api/todos").then((resp) => {
      setTodos(resp.data.todos);
    });
  }, []);

  if (editMode && editedTodo) {
    return (
      <EditTodo
        editedTodo={editedTodo}
        setEditedTodo={setEditedTodo}
        updateTodo={updateTodo}
      />
    );
  }

  return (
    <div className="flex flex-col items-center gap-8 pt-8 bg-gray-100 pb-32">
      <div className="text-3xl font-bold text-gray-800">Todo List</div>
      <TodoInput
        inputText={inputText}
        addTodo={addTodo}
        clearTodos={clearTodos}
        setInputText={setInputText}
      />

      <div className="mt-4">
        {todos.map((todo, index) => (
          <TodoItems
            key={index}
            todo={todo}
            handleCheckboxChange={handleCheckboxChange}
            setEditMode={setEditMode}
            setEditedTodo={setEditedTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
}
