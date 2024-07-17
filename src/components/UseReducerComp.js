import React, { useReducer } from 'react'

const UseReducerComp = () => {

  // useReducer(reducer, initialArg, init?)

  //   The useReducer Hook is similar to the useState Hook.

  // It allows for custom state logic.

  // If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.

  function reducer(state, action) {
    if (action.type === 'incremented_age') {
      return {
        ...state,
        age: state.age + 1
      };

    }
    if (action.type === 'dceremented_age') {
      return {
        ...state,
        age: state.age - 1
      };

    }
    throw Error('Unknown action.');
  }

  let initialArg = { age: 42 }

  const [state, dispatch] = useReducer(reducer, initialArg);

  return (
    <>
      <button onClick={() => {
        dispatch({ type: 'incremented_age' })
      }}>
        +
      </button>
      <button onClick={() => {
        dispatch({ type: 'dceremented_age' })
      }}>
        -
      </button>
      <p>Hello! You are {state.age}.</p>
    </>
  )
}

export default UseReducerComp