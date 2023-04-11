import React from "react";
import { Todo } from "@/Typings";
import Link from "next/link";



const fetchTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todos: Todo[] = await res.json();
  console.log(todos);

  return todos;
};

async function TodosList() {
  const todos = await fetchTodos();
  return (
    <>
      {todos.map((item) => (
        <p className="cursor-pointer" key={item.id}>
          <Link href={`/todos/${item.id}`}>Todos: {item.id}</Link>
        </p>
      ))}
    </>
  );
}

export default TodosList;
