"use client";

import { createContext, ReactNode, useState } from "react";

// Define the type for a single todo
type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};

// Define the type for the context value
type TodosContextType = {
  todos: Todo[];
  handleAddTodo: (task: string) => void;
  handleToggleTodo: (id: string) => void;
  handleDeleteTodo: (id: string) => void;
};

// Create the context with proper type
export const TodosContext = createContext<TodosContextType | undefined>(
  undefined
);

// Provider props type
type Props = { children: ReactNode };

// The provider component
export const TodosProvider = ({ children }: Props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  // Function to add a new todo
  const handleAddTodo = (task: string): void => {
    setTodos((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        task,
        completed: false,
        createdAt: new Date(),
      },
    ]);
  };

  // Function to update a todo
  const handleToggleTodo = (id: string): void => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Function to delete a todo
  const handleDeleteTodo = (id: string): void => {
    setTodos((perv) => perv.filter((todo) => todo.id !== id));
  };

  // Provide todos and add function to children
  return (
    <TodosContext.Provider
      value={{ todos, handleAddTodo, handleToggleTodo, handleDeleteTodo }}
    >
      {children}
    </TodosContext.Provider>
  );
};
