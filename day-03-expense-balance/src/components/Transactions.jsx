export const Transaction = (props) => {
  return (
    <li className="flex flex-row justify-between" key={props.id}>
      <div className="">
        <p className="">
          <b>Description:</b> {props.description}
        </p>
        <p className="">
          <b>Amount:</b> {props.amount}
        </p>
        <p className="">
          <b>Type:</b> {props.type}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center min-h-full">
        <button
          className="bg-red-400 py-2 px-3 rounded-lg cursor-pointer hover:text-white hover:bg-red-600 transition-colors active:bg-red-800"
          onClick={() => props.deleteTransaction(props.id, props.amount, props.type)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};
