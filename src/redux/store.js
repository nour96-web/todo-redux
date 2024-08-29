import { createStore } from "redux";
import reducer from "./reducer";

const devTools = 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const taskStore = createStore(reducer, devTools);

export default taskStore;