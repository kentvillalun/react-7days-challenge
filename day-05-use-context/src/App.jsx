import { useState, createContext, useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Page404 } from "./pages/Page404";
import { Dashboard } from "./pages/Dashboard";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

export const AppContext = createContext();

function App() {
  const [name, setName] = useState("");
  const [newName, setNewName] = useState("");

  return (
    <>
      <AppContext.Provider value={{ name, setName, newName, setNewName }}>
        <div className="">
          <Router>
            <div className="grid grid-rows-[auto_1fr]">
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route element={<ProtectedRoute newName={newName} />}>
                  <Route path="/dashboard" element={<Dashboard />} />
                 
                </Route>
                <Route path="*" element={<Page404 />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </div>
          </Router>
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;
