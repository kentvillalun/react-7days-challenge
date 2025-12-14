import { useContext } from "react";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { name, setName, setNewName, newName } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center h-[calc(100vh-60px)] font-mono bg-gray-50">
      <div className="flex flex-col justify-between gap-3 shadow-xl p-10 rounded-2xl bg-white">
        <h1 className="text-blue-950 text-4xl text-center font-bold">Login</h1>
        <div className="flex flex-col gap-4 rounded">
          <input
            type="text"
            required
            placeholder="Enter your name"
            className="border py-3 px-4 rounded-xl"
            onChange={(event) => setName(event.target.value)}
          />
          <button
            className="bg-blue-800 py-3 px-4 text-white rounded-xl cursor-pointer hover:bg-blue-900 active:bg-blue-950 transition-colors"
            onClick={() => {
              if (newName !== "") {
                alert(
                  "You can't log another account while being logged in. Logout first"
                );
              } else {
                setNewName(name);
                alert("Login successfully!");
                navigate("/dashboard");
              }
            }}
          >
            Login
          </button>
        </div>
        <p className="">This is a mock login (no password)</p>
      </div>
    </div>
  );
};

export default Login;
