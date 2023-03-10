import "./App.css";
import {useState} from "react"
import { Input } from "./components/input.jsx";

function App() {
  const [one , setOne] = useState([])
  const add = ()=>{
    const oneArr = [...one , []]
    setOne(oneArr)
  }
  return (
    <div className="App">
      <Input />
      {one.map(()=>{

       return  <Input />
      })}
      <button  className="btn" onClick={add}>add</button>
    </div>
  );
}

export default App;
