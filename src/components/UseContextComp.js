import React, { createContext, useContext, useState } from 'react'

const UserContext = createContext();

const UseContextComp = () => {
  const [user, setUser] = useState("Jesse Hall");
  // #Usage
  // Passing data deeply into the tree
  // Updating data passed via context
  // Specifying a fallback default value
  // Overriding context for a part of the tree
  // Optimizing re-renders when passing objects and functions

  function Component2() {
    return (
      <>
        <h1>Component 2</h1>
        <Component3 />
      </>
    );
  }

  function Component3() {
    const { user, setUser } = useContext(UserContext);
    return (
      <>
        <h1>Component 3</h1>
        <Component4 />
      </>
    );
  }

  function Component4() {
    return (
      <>
        <h1>Component 4</h1>
        <Component5 />
      </>
    );
  }

  function Component5() {
    const { user, setUser } = useContext(UserContext);


    console.log('user', user)
    console.log('setUser', setUser)


    return (
      <>
        <h1>Component 5:<h6>{`Hello ${user} again!`}</h6> </h1>
        <button onClick={() => setUser("abhishek Hello")}>Re-name</button>

      </>
    );
  }



  // useContext returns the context value for the calling component. 
  // It is determined as the value passed to the closest SomeContext.Provider above the calling component in the tree. 
  // If there is no such provider, then the returned value will be the defaultValue you have passed to createContext for that context. 
  // The returned value is always up-to-date. React automatically re-renders components that read some context if it changes

  return (
    <UserContext.Provider
      value={{
        user,
        setUser
      }}
    >
      <Component2 />
    </UserContext.Provider>
  );

}

export default UseContextComp