import { Todo } from "@/Typings";
import React from "react";

type PageProps = {
  params: {
    todoId: String;
  };
};

const fetchTodo = async (todoId: String) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    { next: { revalidate: 60 } }
  );

  const todo: Todo = await res.json();

  return todo;
};

async function TodosPage({ params: { todoId } }: PageProps) {
  const todo = await fetchTodo(todoId);

  return (
    <>
      <div className="m-2 p-10 bg-yellow-300 rounded-lg border-2 shadow-lg ">
        <p>
          #{todoId}: {todo.title}
        </p>
        <p>Completed: {todo.completed ? "Yes" : "No"}</p>
        <p className="mt-5 border-t border-black text-right">
          By User: {todo.userId}
        </p>
      </div>
    </>
  );
}

export default TodosPage;

export const generateStaticParams = async () => {
  const res = await fetch(`
  https://jsonplaceholder.typicode.com/todos
  `);
  const todos: Todo[] = await res.json();

  const trimmedTodos = todos.splice(0,10)
  return trimmedTodos.map((todo) => ({
    todoId: todo.id.toString(),
  }));
};
