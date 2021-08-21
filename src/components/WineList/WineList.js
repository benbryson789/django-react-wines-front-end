import React, { Component } from "react";
import { Table } from "react-bootstrap";
//import { TableHeaderColumn } from "react-bootstrap-table";

class WineList extends Component {
  render() {
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th> Name</th>
              <th> Price</th>
              <th>Varietal</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {this.props.wines.map((wine, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{"name"}</td>
                <td>{wine.price}</td>
                <td>{wine.varietal}</td>
                <td>{wine.description}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        {/* <BootstrapTable data={this.props.wines}>
          <TableHeaderColumn isKey dataField='id'> ID </TableHeaderColumn>
          <TableHeaderColumn dataField='name'> Name </TableHeaderColumn>
          <TableHeaderColumn dataField='price'> Price </TableHeaderColumn>
          <TableHeaderColumn dataField='varietal'> Varietal </TableHeaderColumn>
          <TableHeaderColumn dataField='description'> Description </TableHeaderColumn>
        </BootstrapTable> */}
      </div>
    );
  }
}

export default WineList;
