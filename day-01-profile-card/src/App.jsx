import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const ProfileCard = () => {
  return (
    <div className="card shadow-gray-500 shadow-2xl rounded-3xl max-w-sm m-auto">
      <img
        src="/images/dp-1.jpg"
        alt=""
        className="rounded-2xl max-w-xs m-auto "
      />
      <div className="details">
        <h1 className="name text-4xl font-bold pt-3 z-10">Kent Villalun</h1>
        <p className="description text-xl font-medium">
          Junior React Developer
        </p>
        <button className="follow bg-blue-400 py-2 px-8 rounded-xl text-white m-1 cursor-pointer hover:bg-blue-800 transition-colors ">
          Follow
        </button>
      </div>
    </div>
  );
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ProfileCard />
    </>
  );
}

export default App;
