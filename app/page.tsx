import React, { Suspense } from "react";
import TodosList from "./(user)/todos/TodosList";

const Home = () => {
  return (
    <div className="text-blue-500">
      <Suspense fallback={<p className="text-black bg-yellow-400">loading the todos...</p>}>
        <h1>Loading todos</h1>'
        <div className="flex space-x-2">
          {/* @ts-ignore */}
          <TodosList />
        </div>
      </Suspense>

      <Suspense fallback={<p>loading shopping cart...</p>}>
        <h1>Loading cart</h1>
        <div className="flex space-x-2">
          {/* @ts-ignore */}
          <TodosList />
        </div>
      </Suspense>
    </div>
  );
};

export default Home;
