import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const onchangehandler = (e) => {
    setInput(e.target.value);
  };
  const [result, setResult] = useState(0);

  return (
    <div
      style={{
        textAlign: "center",
        padding: "10vh",
        backgroundColor: "lightblue",
      }}
    >
      <input
        style={{ textAlign: "center", padding: "1vh" }}
        type="text"
        name="input"
        value={input}
        placeholder="Type Here"
        onChange={onchangehandler}
      />
      <p style={{ color: "green" }}>Result is {result}</p>
      <button
        style={{ backgroundColor: "#ff9999" }}
        onClick={() => setInput("")}
      >
        AC
      </button>
      <button onClick={() => setInput(input + "/")}>/</button>
      <br />
      <button onClick={() => setInput(input + 1)}>1</button>
      <button onClick={() => setInput(input + 2)}>2</button>
      <button onClick={() => setInput(input + 3)}>3</button>
      <button onClick={() => setInput(input + "+")}>+</button>
      <br />
      <button onClick={() => setInput(input + 4)}>4</button>
      <button onClick={() => setInput(input + 5)}>5</button>
      <button onClick={() => setInput(input + 6)}>6</button>
      <button onClick={() => setInput(input + "-")}>-</button>
      <br />
      <button onClick={() => setInput(input + 7)}>7</button>
      <button onClick={() => setInput(input + 8)}>8</button>
      <button onClick={() => setInput(input + 9)}>9</button>
      <button onClick={() => setInput(input + "*")}>*</button>
      <br />
      <div style={{ paddingLeft: "1px" }}>
        <button onClick={() => setInput(input + "%")}>%</button>
        <button onClick={() => setInput(input + 0)}>0</button>
        <button
          style={{
            paddingRight: "20px",
            textAlign: "right",
            backgroundColor: "orange",
          }}
          onClick={() => setResult(eval(input))}
        >
          =
        </button>
      </div>

      <br />
    </div>
  );
};

export default App;
