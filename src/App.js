import './App.css';
import { useState } from 'react';
import { Task } from './Task';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState({});

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    setTodoList(
      todoList.filter((task) => {
        return task.id !== id;
      })
    );
  };

  return (
    <div className='App'>
      <input onChange={handleChange} />
      <button onClick={addTask}>Add Task</button>
      <div className='list'>
        {todoList.map((task) => {
          return (
            <Task
              id={task.id}
              taskName={task.taskName}
              deleteTask={deleteTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
