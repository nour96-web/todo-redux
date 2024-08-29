import React from 'react';
import EditTask from './EditTask';
import { compTask, deleteTask } from '../redux/action';
import { useDispatch } from 'react-redux';

const TaskCard = ({ el }) => {
    const dispatch = useDispatch();
  return (
    <div>
        <h1 id={el.isDone ? "comp" : "uncomp"}>{el.action}</h1>
        <button onClick={() => dispatch(deleteTask(el.id))}>Delete</button>
        <button onClick={() => dispatch(compTask(el.id))}>{el.isDone ? "Undo" : "Complete"}</button>
        <EditTask el={el} />
    </div>
  )
}

export default TaskCard