import React, { Component } from 'react';
import './App.css';

function App(props) {
  const data = props.sampleData;
  return (
    <div className="App">
      <h3>Listing Screen</h3>
      <div className='table-container'>
        <table className="table table-striped">
          <thead className='thead-dark'>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {data && data.map((data, index) => {
              return (
                <tr key = {index}>
                  <th scope="row" className='text-left'>{data.id}</th>
                  <td className='text-left'>{data.name}</td>
                  <td className='text-left'>{data.status}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
