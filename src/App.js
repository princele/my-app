import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
// import ReactDOM from 'react-dom';

class App extends Component {
  constructor(){
    super();
    this.state = {val: 0}
    this.update = this.update.bind(this)
  }
  update(){
    this.setState({val: this.state.val + 1})
  }
  componentWillMount() {
    console.log('mouting')
  }
  render(){
    console.log('rederring')
    return <button onClick={this.update}>{this.state.val} </button>
  }
  componentDidMount() {
    console.log('dimount')
  }
}

export default App;
