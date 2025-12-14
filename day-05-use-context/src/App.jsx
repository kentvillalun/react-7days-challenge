import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Page404 } from "./pages/Page404";
import { Dashboard } from "./pages/Dashboard";

function App() {
  return (
    <>
      <div className="">
        <Router>
          <div className="grid grid-rows-[auto_1fr]">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
