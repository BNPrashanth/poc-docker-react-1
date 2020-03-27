import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    data: ""
  };

  async componentDidMount() {
    await fetch('http://localhost:8081/')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTimeout(() => {
          this.setState({ data: data.data, fetching: false });
        }, 2000);
      });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="App">
        {data ? data : "Awaiting response.."}
      </div>
    );
  }
}

export default App;
