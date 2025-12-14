import { useContext } from "react";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { setNewName, newName } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <div className="flex pt-30 flex-col items-center h-[calc(100vh-60px)] font-mono bg-gray-50 gap-8">
      <div className="text-center">
        <h1 className="text-blue-950 font-bold text-6xl ">Welcome!</h1>
        <h2 className="text-black text-3xl">This is the Home Page</h2>
      </div>
      <div className="">
        <button
          className="hover:bg-blue-100 py-1 px-5 rounded-lg transition-colors bg-blue-50"
          onClick={() => {
            if (newName === "") {
              alert("You are currently not logged in to any account");
            } else {
              setNewName("");
              alert("You have logged out");
              navigate("/login");
            }
          }}
        >
          Log out
        </button>
      </div>
    </div>
  );
};
