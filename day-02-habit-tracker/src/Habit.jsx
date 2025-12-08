export const Habit = (props) => {
  return (
    <li className="flex justify-between" key={props.id} style={{ color: props.fixed ? "green" : "black" }}>
      <p>{props.habitName}</p>
      <div className="flex flex-row gap-2">
        <button className="bg-green-100 px-4 py-1 cursor-pointer rounded-md hover:bg-green-600 active:bg-green-900 transition-colors hover:text-white font-semibold" onClick={() => props.toggleFixed(props.id)}> Fixed </button>
        <button
          className="bg-red-100 px-4 py-1 cursor-pointer rounded-md hover:bg-red-600 active:bg-red-900 transition-colors hover:text-white font-semibold"
          onClick={() => props.deleteHabit(props.id)}
        >
          X
        </button>
      </div>
    </li>
  );
};
