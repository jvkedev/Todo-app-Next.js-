"use client";
import { useContext, FormEvent, useState } from "react";
import { TodosContext } from "@/store/todos";

const AddTodo = () => {
  const [todo, setTodo] = useState<string>("");
  const context = useContext(TodosContext);

  if (!context) {
    throw new Error("AddTodo must be used within a TodosProvider");
  }

  const { handleAddTodo } = context;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!todo.trim()) return; // Prevent adding empty todos
    handleAddTodo(todo);
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex mx-auto mt-4 max-w-md px-4 space-x-1.5">
      <input
        type="text"
        placeholder="Write your todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="border p-2 rounded flex-1"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-green-500 text-white rounded"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;
