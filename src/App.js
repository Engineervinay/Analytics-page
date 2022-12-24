import { useState } from "react";
import './App.css';

function App() {
  const [startDateValue, setstartDateValue] = useState(new Date());
  const [endDateValue, setendDateValue] = useState(null);

  function handleStartDateUpdate(e) {
    const dateValue=e.target.value;
    console.log(dateValue);
    setstartDateValue(dateValue);
    console.log(startDateValue);
  }
  
  function handleEndDateUpdate(e) {
    const dateValue=e.target.value;
    setendDateValue(dateValue);
    console.log(endDateValue);
  }
  return (
    <div className="App">
      <header className="App-header">
      <h1>Analytics</h1>
      <input type="date" onChange={(e) => handleStartDateUpdate(e)} id="startDate" name="startDate"></input>
      <input type="date" id="endDate" name="endDate"onChange={(e) => handleEndDateUpdate(e)}></input>
     
      </header>
    </div>
  );
}

export default App;
