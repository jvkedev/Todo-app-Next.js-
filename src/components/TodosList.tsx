"use client";

import { TodosContext } from "@/store/todos";
import { useContext } from "react";

const TodosList = () => {
  const context = useContext(TodosContext);

  if (!context) {
    throw new Error("TodoList must be used within a TodosProvider");
  }

  const { todos, handleToggleTodo, handleDeleteTodo } = context;

  return (
    <table className="table max-w-sm mt-5 mx-auto">
      <thead>
        <tr>
          <th className="border px-4 py-2 text-left">Todo</th>
          <th className="border px-4 py-2 text-left">Created At</th>
          <th className="border px-4 py-2 text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        {todos.length === 0 && (
          <tr>
            <td colSpan={3} className="text-center p-4">
              No todos yet!
            </td>
          </tr>
        )}

        {todos.map((todo) => (
          <tr key={todo.id} className="border">
            <td className="border px-4 py-2">
              <span
                className={
                  todo.completed
                    ? "line-through text-gray-500 text-sm"
                    : "text-sm"
                }
              >
                {todo.task}
              </span>
            </td>
            <td className="border px-4 py=2 text-sm font-mono text-gray-500">
              {todo.createdAt.toLocaleString()}
            </td>
            <td className="px-4 py-2 flex">
              <button
                onClick={() => handleToggleTodo(todo.id)}
                className="ml-2 px-2 py-1 text-white rounded"
              >
                {todo.completed ? "🔙" : "✔️"}
              </button>
              <button
                onClick={() => handleDeleteTodo(todo.id)}
                className="ml-2 px-2 py-1 text-white rounded"
              >
                :❌
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TodosList;
