import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

export const Task = ({task,toggleComplete,deleteTask,editTask}) => {
  return (
    <div className="Todo">
        <p onClick={() => toggleComplete(task.id)} 
        className={`${task.completed 
        ? 'completed':"" }`}>{task.title}</p>
        <div>
            <FontAwesomeIcon icon={faPenToSquare} onClick={()=>editTask(task.id)} />
            <FontAwesomeIcon icon={faTrash} onClick={()=> 
            deleteTask(task.id)}/>
        </div>
    </div>
  )
}
