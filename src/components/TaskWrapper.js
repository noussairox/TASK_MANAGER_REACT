import React, {useState} from 'react'
import { TaskForm } from './TaskForm'
import { Task } from './Task'
import { v4 as uuidv4 } from 'uuid';
import { EditTaskForm } from './EditTaskForm';
uuidv4();

export const TaskWrapper = () => {
    const [tasks, setTasks] = useState([])
    

    const addTask = task => {
        setTasks([...tasks, {id: uuidv4(),  title: task, completed: false,isEditing: false}])
        console.log(tasks)
    }
    const toggleComplete = id => {
        setTasks(tasks.map(task => task.id === id ?
            {...task, completed: !task.completed} : task))
    }
    const deleteTask = id => {
        setTasks(tasks.filter(task => task.id !== id))
    }
    const editTask = id => {
        setTasks(tasks.map(task => task.id === id ?
            {...task, isEditing:! task.isEditing} : task))
    }
    const modifyTask = (newTaskTitle, id) => {
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === id ? { ...task, title: newTaskTitle, isEditing: !task.isEditing } : task
          )
        );
      };
      
  return (
    <div className="TodoWrapper">
        <h1 className='pb-6 font-mono'>Gestionnaire des taches</h1>
        <TaskForm addTask ={addTask}/>
        {tasks.map((task,index)=>(
            task.isEditing ? (
                <EditTaskForm editTask={modifyTask} newtask={task}/>
                ) : (
            <Task task ={task} key={index}
                toggleComplete={toggleComplete}
                deleteTask={deleteTask}
                editTask={editTask}

            /> 
        )))}
    </div>
  )
}
