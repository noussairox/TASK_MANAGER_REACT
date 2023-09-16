import React, {useState} from 'react'

export const TaskForm = ({addTask}) => {
    const [value , setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        addTask(value);

        setValue('')
    }
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
        <input type="text" className="todo-input"
        value={value}
        placeholder="Ecrit vous votre tache a effectué"
        onChange={e => setValue(e.target.value)}
         />
        <button type="submit" className='todo-btn'>
        Enregistrer
        </button>
    </form>
  )
}
