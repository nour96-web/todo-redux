
import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK, FILTRE_TASK } from "./actionTypes";

export const deleteTask = (TaskId) => {
return {
    type : DELETE_TASK,
    payload : TaskId,
};
};

export const compTask = (TaskId) => {
    return {
        type : COMPLETE_TASK,
        payload : TaskId,

    };
};


export const filterTask = () => {
    return {
        type : FILTRE_TASK,
    };
};


export const addtask = (newTask) => {
    return {
        type : ADD_TASK,
        payload : newTask,
    };

};



export const editTask = (editTask) => {
    return {
        type : EDIT_TASK,
        payload : editTask,

    };
};