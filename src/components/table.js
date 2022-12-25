import React from 'react'

function Table(props) {
    
    const tableColumnsDisplay = () => {
        return props.tableColumns.map((data, idx) => {
          return (        
              <td key={idx}>{data}</td>
          )
        })
      }

      const returnTableData = () => {
        const apps=props.appNames.data;
        return props.tabledata.data.map((dataRow, idx) => {
          const { app_id, clicks, date,impressions,requests,responses,revenue } = dataRow;
          
          const app_name = apps.find(obj => obj.app_id === app_id);
          //console.log(app_name);
          return (
            <tr data-id={idx} key={idx}>
              <td>{date}</td>
              <td>{app_name.app_name}</td>
              
              {props.tableColumns.includes("clicks") && <td>{clicks}</td>}
              
              {props.tableColumns.includes("requests") && (<td>{requests}</td>)}
              {props.tableColumns.includes("responses") && (<td>{responses}</td>)}
              {props.tableColumns.includes("impressions") && (<td>{impressions}</td>)}
              {props.tableColumns.includes("revenue") && (<td>{revenue}</td>)}
              {props.tableColumns.includes("Fill Rate") && (<td>{requests/responses *100}</td>)}
              {props.tableColumns.includes("CTR") && (<td>{clicks/impressions *100}</td>)}
               
            </tr>
          )
        });
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