import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK, FILTRE_TASK } from "./actionTypes";

const initialState = {
    tasks : [
        { id: Math.random(), action: "Learn React", isDone: true },
        { id: Math.random(), action: "Learn Props", isDone: true },
        { id: Math.random(), action: "Learn API", isDone: false },

    ],
    filter : false,
};
const reducer = (state = initialState, { type , payload }) => {
switch (type) {
    case DELETE_TASK : 
       return {...state, tasks:state.tasks.filter((el) => el.id !== payload)};
    case COMPLETE_TASK :
        return {...state, tasks : state.tasks.map((el) => el.id === payload ? {...el , isDone: !el.isDone} : el ),};
    case FILTRE_TASK :
        return {...state, filter: !state.filter };
    case ADD_TASK : 
        return {...state, tasks: [...state.tasks, payload]};
    case EDIT_TASK : 
        return {...state, tasks : state.tasks.map((el) => (el.id === payload.id ? payload : el)),

        };


    default:
        return state;
}
};
export default reducer;
