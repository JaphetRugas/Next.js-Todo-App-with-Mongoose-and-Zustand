"use client";
import EditTodo from "@/components/EditTodo";
import TodoInput from "@/components/TodoInput";
import TodoItems from "@/components/TodoItems";
import { useTodoStore } from "./stores/todoStore";
import axios from "axios";
import { useEffect } from "react";

export default function Todos() {  
  const { todos, setTodos, editedTodo, editMode } = useTodoStore();

  useEffect(() => {
    axios.get("/api/todos").then((resp) => {
      setTodos(resp.data.todos);
    });
  }, []);

  if (editMode && editedTodo) {
    return (
      <EditTodo />
    );
  }

  return (
    <div className="flex flex-col items-center gap-8 pt-8 bg-gray-100 pb-32">
      <div className="text-3xl font-bold text-gray-800">Todo List</div>
      <TodoInput />

      <div className="mt-4">
        {todos.map((todo, index) => (
          <TodoItems
            key={index}
            todo={todo} />
        ))}
      </div>
    </div>
  );
}
