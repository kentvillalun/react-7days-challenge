import { useState } from "react";
import "./App.css";

function App() {
  // Codes for creating usign useState

  const [habitList, setHabitList] = useState([]); // Creating a state for the list of habits
  const [newHabit, setNewHabit] = useState(""); // A state for the input or the habit that is going to be inserted in the list of habit

  const handleChange = (event) => { // react handling the input 
    setNewHabit(event.target.value);
  };

  const addHabit = () => {
    const habit = {
      id: habitList.length === 0 ? 1 : habitList[habitList.length - 1].id + 1,
      habitName: newHabit,
    };

    setHabitList([...habitList, habit]);
  };

  // Deleting

  const deleteHabit = (id) => {
    setHabitList(habitList.filter((h) => h.id !== id));
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
            onChange={handleChange}
          />

          <button
            className="bg-blue-300 p-2 rounded-lg uppercase hover:bg-blue-600 cursor-pointer transition-colors hover:text-white active:bg-blue-900"
            onClick={addHabit}
          >
            Add habit
          </button>

          <div className="flex flex-col">
            <p>Habits:</p>
            <ul className="pl-5 flex flex-col gap-2">
              {habitList.map((habit) => {
                return (
                  <li className="flex justify-between" key={habit.id}>
                    <p>{habit.habitName}</p>
                    <button
                      className="bg-red-100 px-4 py-1 cursor-pointer rounded-md hover:bg-red-600 active:bg-red-900 transition-colors hover:text-white font-semibold"
                      onClick={() => deleteHabit(habit.id)}
                    >
                      X
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
