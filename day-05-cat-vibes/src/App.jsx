import "./App.css";
import Header from "./components/Header";
import Facts from "./components/Facts";
import Favorites from "./components/Favorites";

function App() {
  return (
    <>
      <div className="">
        <Header />
        <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 gap-5 p-4">
          <Facts />
          <Favorites />
        </div>
      </div>
    </>
  );
}

export default App;
