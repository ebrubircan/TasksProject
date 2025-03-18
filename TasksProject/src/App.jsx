import { useEffect, useState } from 'react'

import './App.css'
import TaskCreate from './components/TaskCreate'
import TaskList from './components/TaskList'
import axios from 'axios'

function App() {
  const [tasks, setTasks] = useState([])
  const createTask = async(title, taskDesc) => {
    const response = await axios.post('http://localhost:3000/tasks',{
      title,
      taskDesc
    })

    const createdTasks = [
      ...tasks,
      response.data
    ]
    setTasks(createdTasks)
  }

  const fetchTasks = async() => {
    const response = await axios.get('http://localhost:3000/tasks')
    setTasks(response.data)
  } 

  useEffect(() => {
    fetchTasks();
  }, []) 

  const deleteTasksById = async(id) => { 
    await axios.delete(`http://localhost:3000/tasks/${id}`)
    const afterDeletingTasks = tasks.filter((task) =>{
       return task.id !== id //Silinmek istenen görev dışındaki tüm görevleri al
      })
      setTasks(afterDeletingTasks)  // Yeni görev listesiyle 'tasks' durumunu güncelle
  }

  const editTaskById = async(id, updatedTitle, updatedTaskDesc) => {
    await axios.put(`http://localhost:3000/tasks/${id}`, {
      title: updatedTitle,
      taskDesc: updatedTaskDesc
    })
    const updatedTasks = tasks.map((task) => {
      if(task.id === id){
        return {
          id,
          title: updatedTitle,  
          taskDesc: updatedTaskDesc
        }
      }
      return task
    })
    setTasks(updatedTasks)
  }

return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>Görevler</h1>
      <TaskList tasks = {tasks} onDelete={deleteTasksById} onUpdate={editTaskById}/>
    </div>
  )
}

export default App
