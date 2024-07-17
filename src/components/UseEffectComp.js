import React, { useEffect, useState } from 'react'

const UseEffectComp = () => {
    // Examples of passing reactive dependencies

    // useEffect(() => {
    //     //Runs on the first render
    //     //And any time any dependency value changes
    //   }, [prop, state]);


    // useEffect(() => {
    //     // ...
    //   }, []); // Does not run again (except once in development)

    // useEffect(() => {
    //     // ...
    //   }); // Always runs again

    // Updating state based on previous state from an Effect


    // const [count, setCount] = useState(0);

    // useEffect(() => {
    //   const intervalId = setInterval(() => {
    //     setCount(count + 1); // You want to increment the counter every second...
    //   }, 1000)
    //   return () => clearInterval(intervalId);
    // }, [count]); // 🚩 ... but spe

    const [count, setCount] = useState(0);

    const [person, setPerson] = useState('Alice');
    const [bio, setBio] = useState(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(c => c + 1); // ✅ Pass a state updater
        }, 1000);
        return () => clearInterval(intervalId);
    }, []); // ✅ Now count is not a dependency


  
    // useEffect(() => {
    //   let ignore = false;
    //   setBio(null);
    // //   fetchBio(person).then(result => {
    // //     if (!ignore) {
    // //       setBio(result);
    // //     }
    // //   });
    //   return () => {
    //     ignore = true;
    //   };
    // }, [person]);


    // useEffect returns undefined.

    return <h1>{count}</h1>;
}

export default UseEffectComp