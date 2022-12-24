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
        return props.tabledata.data.map((dataRow, idx) => {
          const { app_id, clicks, date,impressions,requests,responses,revenue } = dataRow;
          return (
            <tr data-id={app_id} key={app_id}>
              <td>{app_id}</td>
              <td>{clicks}</td>
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