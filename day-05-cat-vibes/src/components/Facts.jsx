import { useState } from "react";
import Axios from "axios";

const Facts = ({ addFavorite }) => {
  const [facts, setFacts] = useState(null);

  const fetchData = async () => {
    const res = await Axios.get("https://catfact.ninja/fact");
    setFacts(res.data);
  };

  return (
    <div className="flex flex-row justify-between items-start gap-5 md:order-2">
      <div className="flex flex-col gap-4">
        {facts?.fact && <h2 className="font-mono text-lg">Cat Fact:</h2>}
        <p>{facts?.fact}</p>
      </div>

      <div className="flex flex-col gap-3">
        <button
          className="py-5 px-6 bg-blue-300 rounded-lg hover:bg-blue-400 active:bg-white transition-colors min-w-40"
          onClick={fetchData}
        >
          Generate Facts
        </button>

        <button
          className="py-3 px-6 bg-red-300 rounded-lg hover:bg-red-400 active:bg-white transition-colors min-w-40"
          onClick={() => addFavorite(facts?.fact)}
        >
          Add to Favorite
        </button>
      </div>
    </div>
  );
};

export default Facts;
