import { useState } from "react";
import Axios from "axios";

const Facts = () => {
  const [facts, setFacts] = useState({});

  const fetchData = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setFacts(res.data);
      console.log(facts);
    });
  };

  return (
    <div className="flex flex-row justify-between items-start gap-5 md:order-2">
      <div className="flex flex-col gap-4">
        <h2 className="font-mono text-lg">Cat Fact:</h2>
        <p>{facts.fact}</p>
      </div>

      <button
        className="py-5 px-6 bg-blue-300 rounded-lg hover:bg-blue-400 active:bg-white transition-colors min-w-40 "
        onClick={fetchData}
      >
        Generate Facts
      </button>
    </div>
  );
};

export default Facts;
