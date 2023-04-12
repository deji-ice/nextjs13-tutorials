import React from "react";
import { Todo } from "@/Typings";
import Link from "next/link";



const fetchTodos = async () => {
// setTimeout to random numbers between 1 and 5 secs
  const timeout = Math.floor(Math.random() * 5 + 1)*1000;
  await new Promise((resolve)=>setTimeout(resolve, timeout))

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
        <p className="cursor-pointer text-black bg-yellow-400" key={item.id}>
          <Link href={`/todos/${item.id}`}>Todos: {item.id}</Link>
        </p>
      ))}
    </>
  );
}

export default TodosList;
