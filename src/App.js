import { useState } from "react";
import "./App.css";
import UseStateComp from './components/UseStateComp'
import UseEffectComp from "./components/UseEffectComp";
import UseContextComp from "./components/UseContextComp";
import UseReducerComp from "./components/UseReducerComp";
import UseMemoComp from "./components/UseMemoComp";
import UseCallbackComp from "./components/UseCallbackComp";


function App() {
  const [age, setAge] = useState(1);
  const [name, setName] = useState("Taylor");

  const [myObj, setMyObj] = useState({
    age: {
      age1: {
        age2: {
          main: [{ by1: 23 }, { by2: 3 }, { by3: 65 }]
        }
      }
    },
  })

  const [myArray, setArray] = useState([])

  // A virtual DOM is a lightweight JavaScript object which is the copy of the real DOM.
  // This Virtual DOM works in three simple steps-
  //  i. Whenever any underlying data changes, the entire Ul is
  //     re-rendered in Virtual DOM representation
  //  ii. Then the difference between the previous DOM representation 
  //       and the new one is calculated
  //  iii. Once the calculations are done, the real DOM will be updated with only 
  //        the things that have actually changed

  return (<>
  
  {/* <UseStateComp age={age} name={name} setAge={setAge} setName={setName} setMyObj={setMyObj} myObj={myObj} setArray={setArray} myArray={myArray}/> */}
  {/* <UseEffectComp /> */}
  {/* <UseContextComp /> */}
  {/* <UseReducerComp /> */}
  {/* <UseMemoComp /> */}
  {/* <UseCallbackComp /> */}
  <></>


  </>);
}

export default App;
