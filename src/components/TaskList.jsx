import React from 'react'
import { useSelector } from 'react-redux'
import TaskCard from './TaskCard';

const TaskList = () => {
    const { tasks, filter } = useSelector ((state) => state);
  return (
    <div>
        {
            filter ? tasks.filter((el) => el.isDone === false)
            .map((el) => (<TaskCard key={el.id} el={el} />
    
            )) : tasks.map((el) => (<TaskCard key={el.id} el={el} />
    
            ))
        }
    </div>
  );
};

export default TaskList