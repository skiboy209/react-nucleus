import React, { Component } from "react";
import "./TableStyle.css";

class Table extends Component {
    constructor(props){
        super();
        this.state = {size: 3};
      }
 render() {
    let rows = [];
    let data = "Data";
    for (var i = 0; i < this.state.size; i++){
      let rowID = `row${i}`
      let cell = []
      for (var idx = 0; idx < this.state.size; idx++){
        let cellID = `cell${i}-${idx}`
        cell.push(<td key={cellID} id={cellID}>{data}</td>)
      }
      rows.push(<tr key={i} id={rowID}>{cell}</tr>)
    }
    return(
      <div className="container">
        <div className="row">
          <div className="col">
          <h1>Table Data Display</h1>
            <table id="simple-board">
               <tbody>
                 {rows}
               </tbody>
             </table>
          </div>
        </div>
      </div>
    )
  }
}

export default Table;
