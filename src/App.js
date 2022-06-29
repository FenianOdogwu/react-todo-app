import React, {useState, useEffect} from 'react';
import "./index.css";
import Form from './components/Form.js';
import TodoList from './components/TodoList';

function App() {


  //States
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([])

  //RUN ONCE WHEN APP STARTS
  useEffect(() => {
    getLocalTodos();
  }, []);

  //useEffect
  useEffect(() => {
   filterHandler();
   saveLocalTodos();
  }, [todos, status]); // anytime todos or status changes, run the function


  //Functions (can be added to useEffect)
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todos => todos.completed === false))
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  };


  //Save to local storage (F12, Application)
  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos))
  };

  const getLocalTodos = () => { // if we have a database, check if it's null, if it's null, make an array, if there already is something, get the parsed
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos', JSON.stringify(todos)));
      setTodos(todoLocal);
    }
  }


  return (
    <div className="App">
      <header>
      <h1>Todo List</h1>
      </header>
     <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} status={status} setStatus={setStatus}  />
     <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}></TodoList>
    </div>
  );
}

export default App;
