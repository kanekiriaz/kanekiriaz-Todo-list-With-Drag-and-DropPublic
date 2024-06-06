import React from 'react';
import Todo from '../assets/direct-hit.png';
import './TaskColoumn.css'
import TaskCard from './TaskCard';
import DropArea from './DropArea';
const TaskColoumn = ({
      tittle,
      icon,
      tasks,
      status,
      handleDelete,
      setActiveCard,
      onDrop
      }) => {
  return (
        <section className='task_coloumn'> 
        <h2 className='task_coloumn_heading'>
            <img className='task_coloumn_icon' src={icon} alt="" />
            {tittle}
            </h2>


            <DropArea onDrop={() => onDrop(status ,0)}/>

            
            {tasks.map(
              (task, index) => 
                task.status === status && (
                  <React.Fragment key={index} >
                    <TaskCard 
                        tittle={task.task}
                        tags={task.tags}
                        handleDelete={handleDelete}
                        index={index}
                        setActiveCard={setActiveCard}
                    />
                  <DropArea onDrop={() => onDrop(status , index+1)} />
                  </React.Fragment>
                )
            )}
            
        </section>
  );
};

export default TaskColoumn
