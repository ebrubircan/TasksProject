import { useState } from 'react'

import './App.css'
import TaskCreate from './components/TaskCreate'
import TaskList from './components/TaskList'

function App() {
  const [tasks, setTasks] = useState([])
  const createTask = (title, taskDesc) => {
    const createdTasks = [
      ...tasks,
      {
        id: Math.round(Math.random()*99999),
        title,
        taskDesc,
      }
    ]
    setTasks(createdTasks)
  }

  const deleteTasksById = (id) => {
    const afterDeletingTasks = tasks.filter((task) =>{
       return task.id !== id //Silinmek istenen görev dışındaki tüm görevleri al
      })
      setTasks(afterDeletingTasks)  // Yeni görev listesiyle 'tasks' durumunu güncelle
  }

  const editTaskById = (id, updatedTitle, updatedTaskDesc) => {
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
