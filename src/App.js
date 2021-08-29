import {useState, useEffect} from 'react';
import './App.css';
import Form from './Form';
import Todolist from './Todolist';

const App = () => {
  const [input,
    setInput] = useState('');
  const [todos,
    setTodos] = useState([])
  const [status,
    setStatus] = useState('all')
  const [filteredTodos,
    setFilteredTodos] = useState([]);


useEffect(() => {
 getLocalTodos();
}, [])

  useEffect(() => {
    filterHandler();
    saveTolocal();

  }, [todos, status]);


  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true))
        break;
      case 'Not completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos)
        break;
    }

  }
  // save to local

  const saveTolocal = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  // getlocaltodos
  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
     let todoLocal =JSON.parse(localStorage.getItem("todos"));
     setTodos(todoLocal);
        
    }
  }

  return (
    <div className="App">
    <h1 className="my-4" style={{color:'#fff'}}>Ruhi's Todo List</h1>
      <Form
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
        setFilteredTodos={setFilteredTodos}/>
      <Todolist setTodos={setTodos} todos={todos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
