import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
  };

  const minus = () => {
    count != 0 && setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="shadow-lg p-10 rounded-xl flex flex-col gap-4">
          <h1 className="text-center font-mono text-3xl font-semibold text-blue-500">
            Counter
          </h1>
          <div className="flex flex-col gap-3 justify-between">
            <p className="text-center font-semibold text-4xl"> {count} </p>
            <div className="flex gap-4 justify-between text-xl font-semibold text-white">
              <button
                className="bg-red-400 py-1 px-5 rounded hover:bg-red-700 transition-colors active:bg-red-900 cursor-pointer "
                onClick={minus}
              >
                -
              </button>
              <button
                className="bg-blue-400 py-1 px-5 rounded uppercase hover:bg-blue-700 cursor-pointer active:bg-blue-900 transition-colors"
                onClick={reset}
              >
                Reset
              </button>
              <button
                className="bg-green-400 py-1 px-5 rounded hover:bg-green-600 active:bg-green-900 transition-colors cursor-pointer"
                onClick={add}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
