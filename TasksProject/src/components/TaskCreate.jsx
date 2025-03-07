import React, {useState} from 'react';


function TaskCreate({onCreate}) {
    const [title, setTitle] = useState('')
    const [taskDesc, setTaskDesc] = useState('')

    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleTaskChange = (event) => {
        setTaskDesc(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onCreate({title, taskDesc})
        setTitle('')
        setTaskDesc('')
    }

    return ( 
    <div className="taskCreate">
        <h3>Lütfen Task Ekleyiniz</h3>
        <form className="taskForm">

        <label className="textLabel">Başlık Giriniz</label>
        <input value = {title} onChange={handleChange} className="taskInput"/>

        <label className="textLabel">Task Giriniz</label>
        <textarea value = {taskDesc} onChange={handleTaskChange}className="taskInput" rows={5}/>

        <button onClick={handleSubmit} className="taskButton">Oluştur</button>

        </form>
        
    </div> 
    );
}

export default TaskCreate;