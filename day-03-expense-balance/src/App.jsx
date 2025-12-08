import { useState } from "react";
import "./App.css";
import { Transaction } from "./components/transactions";

function App() {
  const [transactionList, setTransactionList] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("");

  const [balance, setBalance] = useState(1000);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleAmount = (event) => {
    setAmount(Number(event.target.value));
  };

  const handleType = (event) => {
    setType(event.target.value);
  };

  const addTransaction = () => {
    const transaction = {
      id:
        transactionList.length === 0
          ? 1
          : transactionList[transactionList.length - 1].id + 1,
      description: description,
      amount: amount,
      type: type,
    };

    addIncomeExpense();

    setTransactionList([...transactionList, transaction]);
    
 
  };

  const addIncomeExpense = () => {
    if (type === "income") {
      setIncome(amount);
      setBalance(balance + amount);
    } else {
      setExpense(amount);
      setBalance(balance - amount);
    }
  };

  const deleteTransaction = (id, amount, type) => {
    setTransactionList(transactionList.filter((t) => t.id !== id));

    if (type === "income") {
      setBalance(balance - income)
      setIncome(income - amount)
    } else {
      setBalance(balance + expense)
      setExpense(expense - amount)
    }
  };

  

  return (
    <>
      <div className="grid grid-cols-1 grid-rows-2 font-mono gap-4 grid-rows-[auto_1fr]">
        <h1 className="text-center p-6 font-bold text-4xl bg-blue-500 text-white">
          Balance Tracker
        </h1>
        <div className="grid md:grid-cols-2 md:grid-rows-2 gap-3">
          <div className="flex flex-col gap-3">
            <h2 className="text-center text-2xl">Summary Section</h2>
            <div className="grid grid-cols-3 text-center gap-2 p-2 h-25">
              <div className="rounded-lg shadow-md bg-red-200 grid grid-rows-2">
                <h3 className="text-xl p-1">Balance</h3>
                <p className="text-lg">{balance}</p>
              </div>

              <div className="rounded-lg shadow-md bg-blue-200 grid grid-rows-2">
                <h3 className="text-xl p-1">Income</h3>
                <p className="text-lg">{income}</p>
              </div>

              <div className="rounded-lg shadow-md bg-green-200 grid grid-rows-2">
                <h3 className="text-xl p-1">Expense</h3>
                <p className="text-lg">{expense}</p>
              </div>
            </div>

            <div className="p-2">
              <h2 className="text-center text-2xl">Transaction List</h2>
              <ul className="p-5 flex flex-col gap-7">
                {transactionList.map((t) => {
                  return (
                    <Transaction id={t.id} description={t.description} amount={t.amount} type={t.type} deleteTransaction={deleteTransaction} />
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-center text-2xl">Add Transaction Form</h2>
            <div className="form flex flex-col gap-6 p-5 ">
              <input
                type="text"
                className="border rounded-md py-2 px-3"
                placeholder="Description"
                required
                onChange={handleDescription}
              />

              <input
                type="number"
                name=""
                id=""
                className="border rounded-md py-2 px-3"
                placeholder="Amount (e.g. 1000)"
                required
                onChange={handleAmount}
              />

              <select
                className="border rounded-md py-3 px-3"
                value={type}
                onChange={handleType}
              >
                <option value="" selected>
                  Select type
                </option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>

              <button
                className="rounded-md py-2 px-3 bg-blue-300 font-bold uppercase cursor-pointer hover:bg-blue-500 transition-colors hover:text-white active:bg-blue-900"
                onClick={addTransaction}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
