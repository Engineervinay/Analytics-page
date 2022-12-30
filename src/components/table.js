import React from 'react'
import './table.css'
import companyLogo from '../images/appLogo.png';
function Table(props) {
    
    const tableColumnsDisplay = () => {
        return props.tableColumns.map((data, idx) => {
          return (        
              <td className="table-heading"key={idx}>{data}</td>
          )
        })
      }

      const returnTableData = () => {
        if(props.appNames!==undefined ){
        const apps=props.appNames.data;


       if(props.tabledata!==undefined && props.tabledata!==null){
        return props.tabledata.data.slice(0,10).map((dataRow, idx) => {
          const { app_id, clicks, date,impressions,requests,responses,revenue } = dataRow;
          
          const app_name = apps.find(obj => obj.app_id === app_id);
          //console.log(app_name);
          return (
            <tr className="table-row"data-id={idx} key={idx}>
              <td>{date.slice(0,-10)}</td>
              <td><img className="app-logo"src={companyLogo} alt="sharechat logo"/><span>{app_name.app_name}</span></td>
              
              {props.tableColumns.includes("clicks") && <td>{clicks.toLocaleString()}</td>}
              
              {props.tableColumns.includes("requests") && (<td>{requests.toLocaleString()}</td>)}
              {props.tableColumns.includes("responses") && (<td>{responses.toLocaleString()}</td>)}
              {props.tableColumns.includes("impressions") && (<td>{impressions.toLocaleString()}</td>)}
              {props.tableColumns.includes("revenue") && (<td>{revenue.toLocaleString("en-US", {style:"currency", currency:"USD"})}</td>)}
              {props.tableColumns.includes("Fill Rate") && (<td>{(requests/responses).toLocaleString(undefined,{maximumFractionDigits:4})}</td>)}
              {props.tableColumns.includes("CTR") && (<td>{(clicks/impressions ).toLocaleString(undefined,{maximumFractionDigits:4})}</td>)}
               
            </tr>
          )
        });}}
      }

  return (

    <>
    <table>
      <thead>
        <tr>            
          {tableColumnsDisplay()}
        </tr>          
      </thead>
      <tbody>
        {returnTableData()}          
      </tbody>
    </table>
  </>
  
    )
}

export default Table