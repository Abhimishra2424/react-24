import React, { useCallback, useState } from "react";

const UseCallbackComp = () => {
  // const cachedFn = useCallback(fn, dependencies)

  // The React useCallback Hook returns a memoized callback function.

  // Think of memoization as caching a value so that it does not need to be recalculated.

  // This allows us to isolate resource intensive functions so that they will not automatically run on every render.

  // The useCallback Hook only runs when one of its dependencies update.

  // This can improve performance.

  // The useCallback and useMemo Hooks are similar.
  // The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.
  // You can learn more about useMemo in the useMemo chapter.
  let nextId = 0;
  const [todos, setTodos] = useState([{id: 0, text: "sacacaccs"}]);

  const handleAddTodo = useCallback(
    (text) => {
      const newTodo = { id: nextId++, text };
      setTodos((todos) => [...todos, newTodo]);
    },
    [nextId]
  );

  return (
    <>
      <button onClick={() => handleAddTodo("scasdasd")}>add</button>
      {todos.map((i, index) => {
        return (
          <>
            <div key={index}>{i.text}</div>
          </>
        );
      })}
    </>
  );
};

export default UseCallbackComp;
