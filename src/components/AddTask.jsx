import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtask, filterTask } from '../redux/action';

const AddTask = () => {
    //*****************input state *********//

    const [text, setText] = useState(""); 

    //******************redux**************//

    const { filter } = useSelector((state) => state);
    const dispatch = useDispatch();

    //-------------fonctions-------------------------

    const handleSubmit=(e) => {
        e.preventDefault();
        const newTask = {
            id:Math.random(),
            action: text,
            isDone: false,
        };
        text.trim()==="" ? alert ("Please fill the input") : 
        dispatch(addtask(newTask));
        setText("");

    }

  return (
    <div>
        <h1>TODO LIST</h1>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button type="submit" >Add</button>
            

        </form>
        <button onClick={() => dispatch(filterTask())}>{filter ? "Show All" : "Show Uncompleted"}</button>
    </div>
  )
}

export default AddTask