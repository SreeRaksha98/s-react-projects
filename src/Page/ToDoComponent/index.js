import React, { useEffect, useState } from "react";
import DisplayComponent from "./DisplayComponent"
import "./index.css"
const ToDoComponent = () => {

    const [toDo, setToDo] = useState([])
    const [filteredToDo, setFilteredToDo] = useState([])
    const [userData, setUserData] = useState([])

    const toDoURL = "https://dummyjson.com/todos/"
    const userDataUrl = "https://dummyjson.com/users/"

    useEffect(() => {
        getToDoData()
        getUserData()
    }, [])

    const handleChange = (event) => {
        // console.log('user data',userData)
        // console.log('event', event)

        if (event.target.value !== "false") {
            const filteredToDoData = toDo.todos.filter((item) => {
                return item.completed
            })
            setFilteredToDo(filteredToDoData)
        }
        else if (event.target.value === "false") {
            const filteredToDoData = toDo.todos.filter((item) => {
                return !item.completed
            })
            setFilteredToDo(filteredToDoData)
        }
        else {
            setFilteredToDo(toDo)
        }
    }

    const getToDoData = async () => {
        let dataFromAPI = []
        let xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = () => {
            // console.log(xhttp, xhttp.readyState, xhttp.status)
            if (xhttp.readyState === 4 && xhttp.status === 200) {
                dataFromAPI = JSON.parse(xhttp.responseText)
                setToDo(dataFromAPI)
                setFilteredToDo(dataFromAPI.todos)
            }
        }
        xhttp.open("GET", toDoURL, true);
        xhttp.send();
        return dataFromAPI
    }

    const getUserData = async () => {
        let dataFromAPI = []
        // fetch(toDoURL).then(res => res.json)
        let xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = () => {
            if (xhttp.readyState === 4 && xhttp.status === 200) {
                dataFromAPI = JSON.parse(xhttp.responseText)
                // setUserData(dataFromAPI)
                setUserData(dataFromAPI)
            }
        }
        xhttp.open("GET", userDataUrl, true);
        xhttp.send();
        return dataFromAPI
    }

    // console.log('filteredtodo', filteredToDo)

    return (
        <div className="todo-main-container">
            <div className="todo-sub-container">
                <h1 className="heading-tag">Details of the user and their tasks</h1>
                <div className="select-css">
                    <label>Completed</label>
                    <select name="optionTrueorFalse" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue="none" onChange={handleChange}>
                        <option value="none">Select option</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
            </div>
            {/* <-----------------------------------------to display> */}
            <div className="display-container">
                <DisplayComponent filteredToDo={filteredToDo} userData={userData} />
            </div>
        </div>
    )
}


export default ToDoComponent