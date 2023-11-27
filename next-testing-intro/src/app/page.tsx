"use client";

import TodoList from "./components/TodoList/TodoList";
import AddTodo from "./components/AddTodo/AddTodo";
import { useState, useEffect } from "react";
import type { Todo } from "@/types/Todo";
import fetchTodos from "@/lib/fetchTodos/fetchTodos";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    async function getTodos() {
      const todosArray = await fetchTodos();
      if (todosArray?.length) setTodos(todosArray);
    }

    getTodos();
  }, []);

  return (
    <>
      <AddTodo setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
}
