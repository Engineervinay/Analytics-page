import { useState ,useEffect} from "react";
import './App.css';
import Table from './components/table';
function App() {
  const [startDateValue, setstartDateValue] = useState(new Date());
  const [endDateValue, setendDateValue] = useState(null);
  var columnNames=["Date","app_id","requests","responses","impressions","clicks","revenue"]
  const [data,setData]=useState("");

  useEffect(() => {
    fetch(`http://go-dev.greedygame.com/v3/dummy/report?startDate=${startDateValue}&endDate=${endDateValue}`)
      .then(response => response.json())
      .then(json => setData(json))
      
  }, [startDateValue,endDateValue]);
  
  function handleStartDateUpdate(e) {
    const dateValue=e.target.value;
    console.log(dateValue);
    setstartDateValue(dateValue);
    console.log(data);
  }
  
  function handleEndDateUpdate(e) {
    const dateValue=e.target.value;
    setendDateValue(dateValue);
    console.log(endDateValue);
  }

  return (
    <div className="App">
      <header className="App-header">
      <h2>Analytics</h2>
      <input type="date" onChange={(e) => handleStartDateUpdate(e)} id="startDate" name="startDate"></input>
      <input type="date" id="endDate" name="endDate"onChange={(e) => handleEndDateUpdate(e)}></input>
     <button name="settings">Settings</button>
      <div className="Metrics">
        <h3>Dimensions and Metrics</h3>
     {  data && <Table tabledata={data} tableColumns={columnNames}/>        
}
</div>
      </header>
    </div>
  );
}

export default App;
