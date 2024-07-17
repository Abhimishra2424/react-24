import React, { useMemo, useState } from 'react'

const UseMemoComp = () => {

// The React useMemo Hook returns a memoized value.

// Think of memoization as caching a value so that it does not need to be recalculated.

// The useMemo Hook only runs when one of its dependencies update.

// This can improve performance.


// On the initial render, useMemo returns the result of calling calculateValue with no arguments.

const [count, setCount] = useState(0);

const calculation = useMemo(() => expensiveCalculation(count), [count]);

const increment = () => {
  setCount((c) => c + 1);
};

  return (
    <div>
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  )
}

export default UseMemoComp


const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};
