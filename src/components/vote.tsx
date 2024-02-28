import React, { useState } from 'react';
import { GrAdd, GrFormSubtract } from "react-icons/gr"; // + and - icons after installing react-icons

// ability to add counters

export default function Vote() {
    const [counter, setCounter] = useState(0); // set counter to 0 by default and define state to store num likes 

    const incrementCounter = () => { // increment counter if plus clicked 
        setCounter(counter + 1);
    };

    const decrementCounter = () => { // decrement counter if minus pressed 
        setCounter(counter - 1);
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button
                style={{
                    fontSize: "60%",
                    backgroundColor: "#FF1493",
                    borderRadius: "50%",
                    color: "white",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 10px" // button for adding, add some style elements
                }}
                onClick={incrementCounter}
                aria-label="Increment"
            >
                <GrAdd />
            </button>
            
            {/* display count -- use span as generic in line container for styling */}
            <span style={{ fontSize: "1.5em" }}> {counter} </span>

            <button className = "decrementCounter" 
                style={{ // button for decreasing, add some style elements
                    fontSize: "60%",
                    backgroundColor: "#FF1493",
                    borderRadius: "50%",
                    color: "white",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 10px" 
                }}
                onClick={decrementCounter}
                aria-label="Decrement"
            >
                <GrFormSubtract />
            </button>
        </div>
    );
}
