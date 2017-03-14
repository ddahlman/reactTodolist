import React from 'react';
import './App.css';
import Title from './Title';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import axios from 'axios';

// Container Component
// Todo Id

class App extends React.Component {
  constructor(props) {
    //Pass props to parent class
    super(props);
    //Set initial state
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios.get("http://localhost:8080/php_files/api.php").then((response) => {
      console.log(response.data);

      console.log(typeof response.data);
      this.setState({ data: response.data });
    }
    ).catch((err) => { console.log(err) });
  }

  //Add todo handler
  addTodo(val) {

    axios.post("http://localhost:8080/php_files/add.php?title=" + val).then((response) => {

      axios.get("http://localhost:8080/php_files/api.php").then(
        (response) => {
          this.setState({ data: response.data });
        }
      );

    });

  }
  //Handle remove
  handleRemove(id) {
    // return all todo whose id isn't the one I'm removing
    const remainder = this.state.data.filter(todo => todo.id !== id);

    axios.delete("http://localhost:8080/php_files/delete.php?delete=" + id).then((response) => {
      this.setState({ data: remainder });
    });
  }



  render() {
    return (
      <div className='well'>
        <Title />
        <TodoForm addTodo={this.addTodo.bind(this)} />
        <TodoList
          todos={this.state.data}
          remove={this.handleRemove.bind(this)}
        />
      </div>
    );
  }
}

export default App;
