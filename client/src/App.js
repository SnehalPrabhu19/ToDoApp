import React, { useEffect, useState } from 'react';

const our_api = "http://localhost:3000";

function App() {
  const [todos, setTodos] = useState([]);
  const [newtodo, setNewTodo] = useState("");

  useEffect(() => {
    // Fetch ToDos
    GetTodos();

    console.log(todos);
  }, [])

  const GetTodos = () => {
    fetch(our_api + "/tasks")
      .then(res => res.json())
      .then(data => setTodos(data))
      .catch(err => console.log("Error: ",err));
  }

  // Function to add a new ToDo item
  const addTodoTask = async () => {
    // Check if the newtodo is empty
    if (!newtodo.trim()) {
      window.alert("Please enter a task before adding.");
      return;
    }
    const data = await fetch(our_api + "/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: newtodo
      })
    }).then(res => res.json()); 

    console.log(data);
    setTodos([...todos, data]);
    setNewTodo("");
  }

  // Function to check item if complete
  const completeTodoTask = async id => {
    const data = await fetch(our_api + "/tasks/"+ id, { method: "PUT"})
    .then(res => res.json());

    setTodos(todos => todos.map(todo => {
      if (todo._id === data._id) {
        todo.complete = data.complete;
      }
      return todo;
    }));

  }

  // Function to Delete a ToDo item
  const deleteTodoTask = async id => {
    try {
      const data = await fetch(our_api + "/tasks/"+ id, { method: "DELETE"})
      .then(res => res.json());

      setTodos(todos => todos.filter(todo => todo._id !== data._id));
    }
    catch (error) {
      console.error("Error deleting ToDo Task: ", error);
    } 

  }

  return (
    <div className="app">
      <h1> Welcome To Your Task List </h1>
      <h4>Here is a list of your tasks..</h4>

      <div className='addtodo'>
        <input type='text' placeholder='Enter a To-Do Task' value={newtodo} onChange={(e) => setNewTodo(e.target.value)} />
        <button type='button' onClick={addTodoTask}>ADD</button>
      </div>
      
      <div className="todos">
        { todos.length === 0 ? <div><h4>No Current Tasks to Complete.</h4></div> : 
        todos.map(todo => (
          <div className={"todolist "+ (todo.complete ? "complete" : "")} key={todo._id} 
          onClick={() => completeTodoTask(todo._id)}>
            <div className="checkbox"></div>

            <div className="title">{ todo.title }</div>

            <div className="delete" onClick={(e) => { e.stopPropagation(); deleteTodoTask(todo._id)}} >x</div>
          </div>
        ))}
        
      </div>
    </div>
  );
}

export default App;
