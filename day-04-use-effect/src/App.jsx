import { useState, useEffect} from 'react'
import './App.css';
import Axios from "axios";

function App() {

  const [name, setName] = useState("");
  const [person, setPerson] = useState({});


  const handleNameChange = (event) => {
    setName(event.target.value);
  }


  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setPerson(res.data)
    })
  }

  return (
    <div className="flex justify-center items-center h-screen font-mono">
    <div className='flex flex-col gap-3' >
      <input type="text" className='border rounded-lg p-2' placeholder='Ex. Kent' onChange={ handleNameChange }/>
      <button className='bg-blue-300 py-3 px-4 rounded-lg hover:bg-blue-400 cursor-pointer transition-colors uppercase' onClick={fetchData}> Predict Age </button>
      <p className="">Name: { person.name }</p>
      <p className="">Predicted Age: { person.age }</p>
      <p className="">Count: { person.count }</p>

      
    </div>
    </div>
  )
}

export default App
