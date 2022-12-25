import { useState ,useEffect} from "react";
import './App.css';
import Table from './components/table';
function App() {
  const [startDateValue, setstartDateValue] = useState('2021-06-01');
  const [endDateValue, setendDateValue] = useState('2021-06-30');
  var columnNames=["Date","App","clicks","requests","responses","impressions","revenue","Fill Rate","CTR"];
  const [data,setData]=useState(null);
  const[appNames,setAppNames]=useState();
  const[optionShown,setOptionShown]=useState(false);
  const [checked, setChecked] = useState(["Date","App","clicks","requests","responses","impressions"]);
 
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
  function handleClick (e){
    setOptionShown(current=>!current);
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
  var isChecked = (item) =>
  checked.includes(item) ? "checked-item" : "not-checked-item";
  
  const handleCheck = (event) => {
    var updatedList = [...checked];

    if (event.target.checked) {
      if(!updatedList.includes(event.target.value)){
      updatedList = [...checked, event.target.value];}

    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };
  return (
    <div className="App">
      <h2>Analytics</h2>
      <input type="date" onChange={(e) => handleStartDateUpdate(e)} value={startDateValue} id="startDate" name="startDate"></input>
      <input type="date" id="endDate" name="endDate"onChange={(e) => handleEndDateUpdate(e)} value={endDateValue}></input>
     <button name="settings" onClick={handleClick}>Settings</button>
    {
      optionShown && (
        
        <div id="settings">
          <div className="title">Dimensions and Metrics</div>
          <div className="list-container">
          {columnNames.map((item, index) => (
            <div key={index}>
              <input value={item} type="checkbox" onChange={handleCheck} />
              <span className={isChecked(item)}>{item}</span>
            </div>
          ))}
        </div>

      </div>
      )
    }
   
     {  data && <Table tabledata={data} appNames={appNames} tableColumns={checked}/>  }
      </div>
      
  );
}

export default App;
