import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      shakes: [],
      searchField: ""
    };
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  }

  componentDidMount() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Milk').then(response => response.json())
      .then(results => this.setState({ shakes: results.drinks }));
  }

  render() {
    const { shakes, searchField } = this.state;
    const filteredShakes = shakes.filter(shake =>
      shake.strDrink.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>MILK SHAKES</h1>
        <SearchBox
          placeholder='search shakes'
          handleChange={this.handleChange} />
        <CardList shakes={filteredShakes} />
      </div>
    );
  }
}

export default App;
