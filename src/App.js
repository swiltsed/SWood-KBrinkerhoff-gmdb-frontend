import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    name : JSON,
    stuff: {} //is this just an empty JSON object? it is an empty undefined object
  }
  makeGetRequest() {
    // return fetch("../USAF-gmdb-frontend/server/movies")
    return fetch("localhost:3001/movies")
    .then(response => response.json())
    .then(response => response.args);
  }

  async componentDidMount() {
    try{
      let getResult = await this.makeGetRequest();
      this.setState({

      })
    } catch (e){
      console.error(e);
    }

  }

  render(){
    return (
      
      <div className="App">
        <header className="App-header">
          <h1>GMDB</h1>
        </header>
      </div>
    );
  }
}
export default App;
