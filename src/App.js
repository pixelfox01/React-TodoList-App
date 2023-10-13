import './App.css';
import { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    setTodoList([...todoList, newTask]);
  };

  return (
    <div className='App'>
      <input onChange={handleChange} />
      <button onClick={addTask}>Add Task</button>
      <div className='list'>
        {todoList.map((task) => {
          return <h1>{task}</h1>;
        })}
      </div>
    </div>
  );
}

export default App;
