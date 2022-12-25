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
              <td>{clicks}</td>
              
              <td>{requests}</td>
              <td>{responses}</td>
              
              <td>{impressions}</td>
              <td>{revenue}</td>
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