import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {name: 'Ben', age: 31},
      {name: 'Raya', age: 30},
      {name: 'Kobe', age: 2},
      {name: 'Maya', age: 1}
    ]
  }
  switchHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 31},
        {name: 'Raikhan', age: 30},
        {name: 'Koblan', age: 2},
        {name: 'Maya Skyla', age: 1}
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hello I'm React App</h1>
        <p>This is really working you know</p>
        <button onClick={()=>this.switchHandler('Bektosh')}>Switch name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} 
        />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchHandler.bind(this, 'Bekish')} > My hobbie is coding...</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
        <Person 
          name={this.state.persons[3].name} 
          age={this.state.persons[3].age}/>
      </div>
    );
  }
}

export default App;
