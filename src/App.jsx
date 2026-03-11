import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

const FILTER_MAP = {
    All: () => true,
    Active: (task) => !task.completed,
    Completed: (task) => task.completed,
};
const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {

    function editTask(id, newName) {
        const editedTasksList = tasks.map((task) => {
            if (task.id === id) {
                const editedTask = { ...task, name: newName };
                return editedTask;
            }
            return task;
        })

        setTasks(editedTasksList);

    }

    function toggleTaskCompleted(id) {
        const updatedTasks = tasks.map((task) => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            }
            return task;
        })
        setTasks(updatedTasks);
    }

    function addTask(name) {
        const newTask = {
            id: "todo-" + nanoid(),
            name: name,
            completed: false,
        };
        setTasks([...tasks, newTask]);
    }

    function deleteTask(id) {
        const filteredTasks = tasks.filter((task) => id !== task.id);
        setTasks(filteredTasks);
    }

    const [tasks, setTasks] = useState(props.tasks);
    const [filter, setFilter] = useState("All");

    const filterList = FILTER_NAMES.map((name) => (
        <FilterButton
            key={name}
            name={name}
            isPressed={name === filter}
            setFilter={setFilter} />
    ));
    const taskList = tasks
    ?.filter(FILTER_MAP[filter])
            .map((task) => (
                <Todo id={task.id}
                    name={task.name}
                    completed={task.completed}
                    key={task.id}
                    onCheck={toggleTaskCompleted}
                    onDelete={deleteTask}
                    onEdit={editTask} />
            ));


    const tasksNoun = taskList.length === 1 ? "task" : "tasks";
    const headingText = `${taskList.length} ${tasksNoun} remaining`;


    return (
        <div className="todoapp stack-large">
            <h1 hidden={false}>TodoMatic</h1>
            <Form onSubmit={addTask} />
            <div className="filters btn-group stack-exception">
                {filterList}
            </div>
            <h2 id="list-heading">{headingText}</h2>
            <ul
                role="list"
                className="todo-list stack-large stack-exception"
                aria-labelledby="list-heading">
                {taskList}
            </ul>
        </div>
    );
}

export default App;