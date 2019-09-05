import React, { Component } from 'react';
// import logo from './logo.svg';
import { CardList } from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      'name': 'Sushanth Dv',
      'apps': [],
      'searchField':''
    }

   
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ 'apps': users }));
  }
  handleChange=(e)=> {
   this.setState({ searchField:e.target.value })
  }
  render() {
    const {apps,searchField}=this.state;
    const filteredApps = apps.filter(app =>
    app.name.toLowerCase().includes(searchField.toLowerCase())  )
    return (
      <div className="App">
        <h1>My Apps</h1>
        <SearchBox placeholder="Search" handleChange={this.handleChange} />
        <CardList apps={filteredApps} >
       
        
         </CardList>
     

      </div >
    );
  }
}
// function App() {

// }

export default App;
