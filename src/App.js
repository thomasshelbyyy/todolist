import SearchTask from "./components/SearchTask";
import AddNewTask from "./components/AddNewTask";
import Modals from "./components/Modals";
import TaskList from "./components/TaskList";
import SelectInput from "./components/SelectInput";
import React from "react"
import {nanoid} from "nanoid"

function App() {

    const [addNew, setAddNew] = React.useState(false)
    const [search, setSearch] = React.useState(false)

    const [modal, setModal] = React.useState(false);

    const [addNewInputValue, setAddNewInputValue] = React.useState('')
    const [searchInputValue, setSearchInputValue] = React.useState('')
    const [selectedOption, setSelectedOption] = React.useState('')
    // Coba pakai object
    const [editInputValue, setEditInputValue] = React.useState({})

    const [tasks, setTasks] = React.useState(JSON.parse(localStorage.getItem("tasks")) || [])


    function toggleInput(input) {
        if(input === 'add') {
            setAddNew(prevState => !prevState)
            setSearch(false)
        } else {
            setSearch(prevState => !prevState)
            setAddNew(false)
        }
    }

    React.useEffect(()=> {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const handleAddNewChange = (event) => setAddNewInputValue(event.target.value)

    function handleSearchChange(event) {
        setSearchInputValue(event.target.value)
    }

    function handleEditChange(event) {
        setEditInputValue(prevState => ({...prevState, body: event.target.value}))
    }

    function storeTask(event) {
        if(event.keyCode === 27) {
            setAddNew(false)
        }
        if(event.keyCode === 13) {
            event.preventDefault()
            if(!addNewInputValue) {
                alert('please fill this field')
                return
            }
            addTask(addNewInputValue)
            setAddNewInputValue('')
        }

    }

    function addTask(task) {
        setTasks([...tasks, {id: nanoid(), body: task, complete: false}])
    }

    function handlecomplete(id) {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return {...task, complete: !task.complete};
            }
            return task;
        }));
    }

    function handleEdit(event, id) {
        if(event.keyCode === 13) {
            event.preventDefault()
            const index = tasks.findIndex(task => task.id === id)
            const editedObject = {...editInputValue, body: event.target.value}
            const newArray = [editedObject, ...tasks.slice(0, index), ...tasks.slice(index + 1)]
            setTasks(newArray)
            setModal(false)
        }
    }

    function handleDelete(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    const handleClose = () => {
        setModal(false)
        document.body.style.overflow = "visible";
    };
    const handleShow = (taskId) => {
        setModal(true)
        const currentTask = tasks.find(task => task.id === taskId)
        setEditInputValue(currentTask)
        document.body.style.overflow = "hidden";
    };

    function searchTask(input) {
        const results = tasks.filter(obj => obj.body.includes(input))
        return results
    }

    function handleOptionChange(event) {
        setSelectedOption(event.target.value)
    }

    let taskList
    if(searchInputValue) {
        taskList = searchTask(searchInputValue)
    } else if(selectedOption === "completed") {
        taskList = tasks.filter(task => task.complete)
    } else if(selectedOption === "uncompleted") {
        taskList = tasks.filter(task => !task.complete)
    } else {
        taskList = tasks
    }

    return (
        <main className="main">
            <h1>To do List</h1>
            <div className="utility">
                <div>
                    <AddNewTask 
                    toggleInput={toggleInput} 
                    addNew={addNew} 
                    handleChange={handleAddNewChange} 
                    inputValue={addNewInputValue} 
                    storeTask={storeTask}
                    />

                    <SearchTask 
                    toggleInput={toggleInput} 
                    search={search} 
                    handleChange={handleSearchChange} 
                    inputValue={searchInputValue} 
                    handleSearch={searchTask}
                    />
                </div>

                <SelectInput 
                handleOptionChange={handleOptionChange}
                value={selectedOption}
                />
            </div>

            <div className="task-list">
                <ul>
                    {taskList.length > 0 ? taskList.map(task => (
                            <TaskList 
                            key={task.id} 
                            id={task.id}
                            complete={task.complete} 
                            body={task.body} 
                            handleComplete={handlecomplete}
                            handleDelete={handleDelete}
                            handleShow={handleShow}
                            /> 
                        )
                    ) :
                    <h2>No Tasks Found</h2>}
                </ul>
            </div>

            {modal && (
                <Modals 
                onClose={handleClose}
                handleChange={handleEditChange}
                inputValue={editInputValue.body}
                id={editInputValue.id}
                handleEdit={handleEdit}
                />
            )}
        </main>
  );
}

export default App;
