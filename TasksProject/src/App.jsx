import { useState } from 'react'

import './App.css'
import TaskCreate from './components/TaskCreate'
import TaskList from './components/TaskList'

function App() {
  const [tasks, setTasks] = useState([])
  const createTask = (titles, taskDesc) => {
    const createdTasks = [
      ...tasks,
      {
        id: Math.round(Math.random()*99999),
        titles,
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

return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>Görevler</h1>
      <TaskList tasks = {tasks} onDelete={deleteTasksById}/>
    </div>
  )
}

export default App
