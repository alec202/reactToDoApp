import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import { useState } from "react";
import { nanoid } from "nanoid";


function App(props) {

    const [tasks, setTasks] = useState(props.tasks);

    const taskList = tasks?.map((task) => (
        <Todo id={task.id} name={task.name}
            completed={task.completed} key={task.id} />
    ));

    function addTask(name) {
        const newTask = {
            id: "todo-" + nanoid(),
            name: name,
            completed: false,
        };
        setTasks([...tasks, newTask]);
    }

    const tasksNoun = tasks.length === 1 ? "task" : "tasks";
    const headingText = `${tasks.length} ${tasksNoun} remaining`;


    return (
        <div className="todoapp stack-large">
            <h1 hidden={false}>TodoMatic</h1>
            <Form onSubmit={addTask}/>
            <div className="filters btn-group stack-exception">
                <FilterButton />
                <FilterButton/>
                <FilterButton></FilterButton>
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