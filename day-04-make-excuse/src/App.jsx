import { useState } from 'react'

import './App.css'

function App() {
 

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-blue-100">
        <div className="bg-white p-7 rounded-lg flex flex-col gap-3 shadow-lg">
          <h1 className="text-2xl font-mono font-semibold text-center">Generate an Excuse</h1>
          <div className="p-2 flex flex-row gap-5">
            <button className="bg-green-300 py-1 px-3 rounded-md cursor-pointer hover:bg-green-600 transition-colors">Party</button>
            <button className="bg-green-300 py-1 px-3 rounded-md cursor-pointer hover:bg-green-600 transition-colors">Family</button>
            <button className="bg-green-300 py-1 px-3 rounded-md cursor-pointer hover:bg-green-600 transition-colors">Office</button>
          </div>
          <div className="flex flex-col gap-2">
            <p className="">Party excuse: </p>
            <p className="">Family excuse: </p>
            <p className="">Office excuse: </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
