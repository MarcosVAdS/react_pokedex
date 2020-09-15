import React from 'react';
import './App.css';

class App extends React.Component {
  renderObj(items) {
    return(
      Object.keys(items).map((keys, i) => {
        return (
            <li className="list-group-item" key={i}>{items[keys].name}</li>
          )
        }
      )
    )
  }

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.results
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return <div className="container">
          <h1>Lista de Pokemons</h1>
          <ul>
            {this.renderObj(items)}
          </ul> 
        </div>
    }
  }
}

export default App;
