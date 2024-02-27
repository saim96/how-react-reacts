import { useState } from "react";
import Chicken from "./Chicken";
import Die from "./Die";
import DoubleDice from "./DoubleDice";
import Greeter from "./Greeter";
import Heading from "./Heading";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Die />
      <Greeter />
      <Heading />
      <DoubleDice />
      <Chicken />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
