import React from "react";

const UseStateComp = ({ age, name, setAge, setName, myObj, setMyObj, myArray, setArray }) => {
    // The difference between passing an updater and passing the next state directly

    const updateStateValue = (updateFunc, type) => {
        if (type === "age") {
            // updateFunc(age => age + 1)
            // updateFunc(age => age + 1)
            // updateFunc(age => age + 1)

            updateFunc(age + 1);
            // updateFunc(age + 1)
            // updateFunc(age + 1)
            // updateFunc(age + 1)
        }
        if (type === "name") {
            updateFunc("abhishek");
        }

        if (type === "obj") {

            let obj = {
                age: {
                    age1: {
                        age2: {
                            main: 6545
                        }
                    }
                },
            }
            // setMyObj((prevState) => ({
            //     ...prevState,
            //     age: {
            //         ...prevState.age,
            //         age1: {
            //             ...prevState.age.age1,
            //             age2: {
            //                 ...prevState.age.age1.age2,
            //                 main: 654656,
            //             },
            //         },
            //     },
            // }));

            setMyObj(obj)

            setMyObj({
                ...myObj,
                age: {
                    ...myObj.age,
                    age1: {
                        ...myObj.age.age1,
                        age2: {
                            ...myObj.age.age1.age2,
                            main: [{ by1: 5654 }, { by2: 263 }, { by3: 66565 }]
                        }
                    }
                }
            })
        }

        if (type === "array") {
            updateFunc([
                ...myArray,
                { id: 0, name: "abhi" }
            ])
        }
    };

    return (
        <>
            <div style={{ display: "flex", gap: 10 }}>
                <div>{age}</div>
                <button onClick={() => updateStateValue(setAge, "age")}>Update</button>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
                <div>{name}</div>
                <button onClick={() => updateStateValue(setName, "name")}>
                    Update
                </button>
            </div>

            <div style={{ display: "flex", gap: 10 }}>
                <div>{myObj.age.age1.age2.main.map((i) => {
                    return (
                        <>
                            <p>{i.by1}</p>
                            <p>{i.by2}</p>
                            <p>{i.by3}</p>
                        </>
                    )
                })}</div>
                <button onClick={() => updateStateValue(setMyObj, "obj")}>
                    Update
                </button>
            </div>

            <div style={{ display: "flex", gap: 10 }}>
                <div>{myArray && myArray.length > 0 && myArray.map((i) => {
                    return (
                        <>
                            <p>{i.id}</p>
                            <p>{i.name}</p>
                        </>
                    )
                })}</div>
                <button onClick={() => updateStateValue(setArray, "array")}>
                    Update
                </button>
            </div>

        </>
    );
};

export default UseStateComp;
