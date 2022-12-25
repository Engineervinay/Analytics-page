import { useState ,useEffect} from "react";
import './App.css';
import Table from './components/table';
function App() {
  const [startDateValue, setstartDateValue] = useState('2021-06-01');
  const [endDateValue, setendDateValue] = useState('2021-06-30');
  var columnNames=["Date","App","clicks","requests","responses","impressions","revenue"]
  const [data,setData]=useState(null);
  const[appNames,setAppNames]=useState();
  useEffect(() => {
    fetch(`http://go-dev.greedygame.com/v3/dummy/report?startDate=${startDateValue}&endDate=${endDateValue}`)
      .then(response => response.json())
      .then(json => setData(json))
      
      fetch(` http://go-dev.greedygame.com/v3/dummy/apps`)
      .then(response => response.json())
      .then(json => setAppNames(json))
       
  }, []);
  function getData(){
    if(endDateValue<startDateValue){
      return;
      
    }
    fetch(`http://go-dev.greedygame.com/v3/dummy/report?startDate=${startDateValue}&endDate=${endDateValue}`)
      .then(response => response.json())
      .then(json => setData(json))
      
  }
  function handleStartDateUpdate(e) {
    const dateValue=e.target.value;
    console.log(dateValue);
    setstartDateValue(dateValue);
    console.log(data);
    getData();
  }
  
  function handleEndDateUpdate(e) {
    const dateValue=e.target.value;
    setendDateValue(dateValue);
    console.log(endDateValue);
    getData();
  }

  return (
    <div className="App">
      <h2>Analytics</h2>
      <input type="date" onChange={(e) => handleStartDateUpdate(e)} value={startDateValue} id="startDate" name="startDate"></input>
      <input type="date" id="endDate" name="endDate"onChange={(e) => handleEndDateUpdate(e)} value={endDateValue}></input>
     <button name="settings">Settings</button>
      <div className="Metrics">
        <h3>Dimensions and Metrics</h3>

     {  data && <Table tabledata={data} appNames={appNames} tableColumns={columnNames}/>  }
      </div>
      
    </div>
  );
}

export default App;
