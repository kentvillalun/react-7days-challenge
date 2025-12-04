import { useState } from "react";
import "./App.css";

function App() {
  const [inputHabit, setInputHabit] = useState("");      // current input text
  const [habits, setHabits] = useState([]);              // array of objects

  const handleInputHabit = (event) => {
    setInputHabit(event.target.value);
  };

  const addHabit = () => {
    const trimmed = inputHabit.trim();
    if (!trimmed) return;

    const newHabitObj = {
      id: crypto.randomUUID(),
      name: trimmed,
    };

    setHabits((prev) => [...prev, newHabitObj]); // push into array (immutably)
    setInputHabit(""); // clear input
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-100 font-mono">
      <div className="flex flex-col shadow-xl rounded-lg p-10 bg-white gap-6 min-w-md">
        <h1 className="text-center font-extrabold text-3xl text-blue-900">
          Habit Tracker
        </h1>

        <div className="flex flex-col justify-between gap-4">
          <input
            type="text"
            className="border rounded-lg p-2"
            value={inputHabit}
            onChange={handleInputHabit}
              
          />

          <button
            className="bg-blue-300 p-2 rounded-lg uppercase hover:bg-blue-600 cursor-pointer transition-colors hover:text-white active:bg-blue-900"
            onClick={addHabit}
          >
            Add habit
          </button>

          <div className="flex flex-col">
            <p>Habits:</p>
            <ul className="list-disc pl-5">
              {habits.map((h) => (
                <li key={h.id}>{h.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
