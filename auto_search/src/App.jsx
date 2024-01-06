import { useState, useEffect } from 'react'
import './App.css'
import resources from '../../resources/countryData.json'

function App() {
  const [state, setState] = useState('')
  const [filteredData, setFilteredData] = useState([]);

  const esc = (e) => {
    if (e.key === "Escape") {
      console.log("Escape");
      setFilteredData([]);
    } 
  };

  const search=()=>{
    console.log('search')
  }

  const change = (e)=>{
    setState(e.target.value);
  }

  useEffect(() => {

    if (state !== "") {
      let filteredResults = resources.filter((item) => {
        return item.name.toLowerCase().startsWith(state.toLowerCase());
      });
      setFilteredData(filteredResults);
    } 

    else {
      setFilteredData([]);
    }

  }, [state]);
  return (
    <>
    <input type="text" onKeyUp={(e) => esc(e)} onChange={(e) =>change(e)} value={state} id="text" />
    <button onClick={()=>{search()}}>Search</button>
    <div>
        <ul>
        {filteredData.map((it, index) => (
          <li key={index}>{it.name}</li>
        ))}
        </ul>
      </div>
    </>
  )
}

export default App
