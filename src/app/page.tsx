import AddTodo from "@/components/AddTodo";
import TodosList from "@/components/TodosList";
import { TodosProvider } from "@/store/todos";

const page = () => {
  return (
    <TodosProvider>
      <h1 className="text-center text-xl md:text-3xl font-medium mt-5">
        To-Do App Next.js + TypeScript
      </h1>
      <AddTodo />
      <TodosList />
    </TodosProvider>
  );
};

export default page;
