import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Facts from "./components/Facts";
import Favorites from "./components/Favorites";

function App() {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (factText) => {
    if (!factText) return;

    const newFavorite = {
      id: favorites.length === 0 ? 1 : favorites[favorites.length - 1].id + 1,
      fact: factText,
    };

    setFavorites([...favorites, newFavorite]);
  };

  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 gap-5 p-4">
        <Facts addFavorite={addFavorite} />
        <Favorites favorites={favorites} />
      </div>
    </div>
  );
}

export default App;
