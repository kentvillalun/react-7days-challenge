import { useState } from "react";
import Axios from "axios";

import "./App.css";

function App() {
  const [data, setData] = useState("");

  const fetchData = (category) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${category}`).then(
      (res) => {
        setData(res.data[0].excuse);
      }
    );
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-blue-100">
        <div className="bg-white p-7 rounded-lg flex flex-col gap-3 shadow-lg">
          <h1 className="text-2xl font-mono font-semibold text-center">
            Generate an Excuse
          </h1>
          <div className="p-2 flex flex-row gap-5 justify-center">
            <button
              className="bg-green-300 py-1 px-3 rounded-md cursor-pointer hover:bg-green-600 transition-colors"
              onClick={() => fetchData("party")}
            >
              Party
            </button>
            <button className="bg-green-300 py-1 px-3 rounded-md cursor-pointer hover:bg-green-600 transition-colors" onClick={() => fetchData("family")}>
              Family
            </button>
            <button className="bg-green-300 py-1 px-3 rounded-md cursor-pointer hover:bg-green-600 transition-colors" onClick={() => fetchData("office")}>
              Office
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-center"> {data} </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
