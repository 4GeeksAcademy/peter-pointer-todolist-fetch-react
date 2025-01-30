import React, { useState, useEffect } from "react";

export const TodoListFetch = () => {
    const [addtask, setAddTask] = useState("")
    const [list, setList] = useState(["task 1", "task 2"])
    const base_url = "https://playground.4geeks.com/todo";

    const getTodos = async (user) => {
        const uri = `${base_url}/users/${user}`
        const options = {method: "GET"};
        const response = await fetch(uri, options);
        if (!response.ok) {
            console.log("Error:", response.status, response.statusText);
            return;
        }
        const data = await response.json()
        setList(data.todos)

    }

    useEffect(() => {getTodos("blanca")}, []) 

    const handleAddTask = (event) => {
        setAddTask(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setList([...list, {label:addtask}]);
        setAddTask("");
    }

    const handleDelete = (task) => {
        setList(list.filter((item) => task !== item))
    }

    return (
        <div className="container fw-bold">
            <div className="row col-sm-10 col-md-6 m-auto">
                <h1 className="text-center mt-5">Todo List with Fetch</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Add a new Task</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Add a new Task"
                            value={addtask} onChange={handleAddTask} />
                    </div>
                </form>
                <ul className="list-group">
                    {list.map((item) =>
                        <li className="list-group-item text-center d-flex justify-content-between">{item.label}
                            <span>
                                <i className="fa fa-pen text-success me-2"></i>
                                <i className="fa fa-trash text-danger" onClick={() => handleDelete(item)}></i>
                            </span>
                        </li>
                    )}
                </ul>
            </div>

        </div>

    )
}