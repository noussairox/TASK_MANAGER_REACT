import React, {useState} from 'react'

export const EditTaskForm = ({editTask ,newtask}) => {
    const [value , setValue] = useState(newtask.title);

    const handleSubmit = e => {
        e.preventDefault();

        editTask(value,newtask.id);

        setValue('')
    }
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
        <input type="text" className="todo-input"
        value={value}
        placeholder="Editer une tache"
        onChange={e => setValue(e.target.value)}
         />
        <button type="submit" className='todo-btn'>
        Modifiez
        </button>
    </form>
  )
}
