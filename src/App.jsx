import React,{useState , useEffect, act} from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskColoumn from './components/TaskColoumn'
import todoIcon from'./assets/direct-hit.png'
import doingIcon from './assets/glowing-star.png'
import doneIcon from './assets/check-mark-button.png'

const oldTasks = localStorage.getItem('tasks')
console.log(oldTasks);
const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks)||[]);
  const [activeCard, setActiveCard] = useState(null)
 

  useEffect(() => {
    localStorage.setItem('tasks' ,JSON.stringify(tasks));
  }, [tasks]);
  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task , index) => index !== taskIndex)
    setTasks(newTasks)
  }

  const onDrop= (status , position) => {
    console.log(`${activeCard} is going to place into ${status} and at the postition ${position}`);

    if(activeCard== null || activeCard === undefined) return; 

    const taskToMove= tasks[activeCard];
    const updatedTasks = tasks.filter((task, index) => index!== activeCard)
      updatedTasks.splice(position , 0 , {
        ...taskToMove,
        status : status
      })


      setTasks(updatedTasks)
  }


  return (
    <div className='app'>
      <TaskForm setTasks={setTasks}/>
      <main className='app_main'>
        <TaskColoumn tittle='To Do' 
            icon={todoIcon} 
            tasks={tasks} 
            status="todo"
            handleDelete = {handleDelete}
            setActiveCard = {setActiveCard}
            onDrop={onDrop}
        />
        <TaskColoumn 
            tittle='Doing'
            icon={doingIcon}
            tasks={tasks} 
            status="doing"
            handleDelete = {handleDelete}
            setActiveCard = {setActiveCard}
            onDrop={onDrop}
        />
        <TaskColoumn 
            tittle='Done'
            icon = {doneIcon}
            tasks={tasks} 
            status='done'
            handleDelete = {handleDelete}
            setActiveCard = {setActiveCard}
            onDrop={onDrop}
        />
            
        
        
      </main>
        
    </div>
  )
}

export default App
