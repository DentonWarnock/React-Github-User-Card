import React from 'react';
import logo from './logo.svg';
import './App.css';

const gitAccountName = "DentonWarnock";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: []
    };
  }

  
  componentDidMount() {
    fetch(`https://api.github.com/users/${gitAccountName}`)
      .then(res => res.json())
      .then(res => {
        console.log("Component did mount: fetch: res: ", res);
        this.setState({
          user: res
        })
      })
      .catch(err => {
        console.log("Component did mount: fetch: err: ", err)
      })
  }

  render() {
    return (
      <div className="App">
        <p>test</p>
      </div>
    );
  }  
}

export default App;
