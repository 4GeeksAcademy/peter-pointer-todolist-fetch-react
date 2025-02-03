import React, { useState, useEffect } from "react";

export const TodoListFetch = () => {
    const [addTask, setAddTask] = useState("")
    const [editTask, setEditTask] = useState("")
    const [isDone, setIsDone] = useState("")
    const [todos, setTodos] = useState([])
    const [isEdit, setIsEdit] = useState(false);
    const [editId, setEditId] = useState(null);
    const base_url = "https://playground.4geeks.com/todo";
    const user = "pedro"

    useEffect(() => { getTodos() }, [])

    // GET Method
    const getTodos = async () => {
        const uri = `${base_url}/users/${user}`
        const options = { method: "GET" };
        const response = await fetch(uri, options);
        if (!response.ok) {
            console.log("Error:", response.status, response.statusText);
            return;
        }
        const data = await response.json()
        setTodos(data.todos)
    }

    // POST Method
    const addTodos = async () => {
        const dataToSend = {
            label: addTask,
            is_done: false
        }
        const uri = `${base_url}/todos/pedro`
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataToSend)
        }
        const response = await fetch(uri, options);
        if (!response.ok) {
            console.log("Error", response.status, response.statusText)
            return
        }
        //const data = await response.json()
        getTodos()
    }

    // PUT Method
    const updateTodos = async (id) => {
        const dataToSend = {
            label: editTask,
            is_done: isDone
        };

        const uri = `${base_url}/todos/${id}`;
        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataToSend)
        };

        const response = await fetch(uri, options);
        if (!response.ok) {
            console.log ("Error:", response.status, response.statusText);
            return;
        }
        
        getTodos();
    }

    // DELETE Method
    const deleteTodo = async (id) => {
        const uri = `${base_url}/todos/${id}`;
        const options = {
            method: "DELETE"
        }

        const response = await fetch(uri, options);
        if (!response.ok) {
            console.log("Error:", response.status, response.statusText);
            return
        }
        getTodos()
    }

    const handleSubmitAdd = (event) => {
        event.preventDefault();
        if (addTask.trim() != "") {
            setAddTask(addTask.trim())
            addTodos()        
        }
        setAddTask("");        
    }

    const handleSubmitEdit = (event) => {
        event.preventDefault();  
        if (editTask.trim() != ""){
            setEditTask(editTask.trim())
            updateTodos(editId) 
        }     
        setIsEdit(false)
        alert("Task edited")
    }

    const handleAddTask = (event) => {
        setAddTask(event.target.value)
    }

    const handleEditTask = (event) => {
        setEditTask(event.target.value)
    }
  
    const handleEdit = (task) => {
        setIsEdit(true)
        setEditTask(task.label)
        setIsDone(task.is_done)
        setEditId(task.id)
    }

    return (
        <div className="container mt-1">
            <div className="row col-sm-10 col-md-6 m-auto">
                <h1 className="text-center mt-2">
                    <span className="fa fa-check-square text-success me-2">
                    </span>Todo List with Fetch
                </h1>
                <div className="container">
                    {!isEdit ? 
                        <form onSubmit={handleSubmitAdd}>
                            <div className="mb-3 text-start">
                                <label htmlFor="exampleFormControlInput1" className="form-label text-body-secondary fw-medium">Add a new Task</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Add a new Task"
                                    value={addTask} onChange={handleAddTask} />
                            </div>
                        </form>
                        :
                        <form onSubmit={handleSubmitEdit}>
                            <div className="mb-1 text-start">
                                <label htmlFor="exampleInputEmail1" className="form-label text-primary fw-medium">Edit Task</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleEditTask} value={editTask}  />
                            </div>
                            <div className="mb-3 text-start form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={ event => setIsDone (event.target.checked) } checked={isDone} />
                                <label className="form-check-label" htmlFor="exampleCheck1">Completed</label>
                            </div>
                            <div className="text-start">
                                <button type="submit" className="btn btn-primary me-2">Save changes</button>
                                <button type="reset" className="btn btn-secondary" onClick={() => setIsEdit(false)}>Cancel</button>
                            </div>
                        </form>
                    }

                    <h2 className="text-start text-success mt-4">Tasks list</h2>
                    <ul className="list-group">
                        {todos.map((item) =>
                            <li key={item.id} className="list-group-item text-center d-flex justify-content-between fw-medium">{item.label}  
                                <span>
                                    <i className="fas fa-edit text-secondary me-2" onClick={() => handleEdit(item)}></i>
                                    <i className="fa fa-trash text-danger" onClick={() => deleteTodo(item.id)}></i>
                                </span>
                            </li>
                        )}
                        <li className="list-group-item list-group-item-secondary text-secondary text-end">{todos.length} Tasks</li>
                    </ul>
                </div>
            </div>
        </div>

    )
}